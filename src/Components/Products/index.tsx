import React, {useState, useCallback} from 'react';
import './style.css';
import debounce from 'lodash.debounce';
import {data} from './data';

const Products = () => {
  const [Data, setData] = useState(data);
  const [PriceRange, setPriceRange] = useState(1000);
  const [Query, setQuery] = useState('');
  const debouncedFilter = useCallback( 
		debounce((nextPriceRange:number, nextQuery:string ) => {
      const newData = data.filter(item => item['Selling Price']<nextPriceRange && item.Name.includes(nextQuery.trim()));
      setData(newData);
    }, 1000),
		[], // will be created only once initially
	);
  const handleSearchQuery = (query: string, pricerange: number) => {
    setQuery(query);
    debouncedFilter(pricerange, query);
  }
  const handlePriceRangeChange = (pricerange: number, query: string) => {
    setPriceRange(pricerange);
    debouncedFilter(pricerange, query);
  }
  return (
    <>
      <h2 style={{paddingTop: '3em', paddingLeft: 20}}>Products</h2>
      <section className="services py-2 text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
              <span className="service-icon">
                <i className="fas fa-parachute-box"></i>
              </span>
              <h5 className="font-weight-bold text-uppercase">free shipping</h5>
              <p className="text-muted text-capitalize">
                free shipping on all order over 100.00
              </p>
            </div>
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
              <span className="service-icon">
                <i className="fas fa-phone-volume"></i>
              </span>
              <h5 className="font-weight-bold text-uppercase">
                online support 24/7
              </h5>
              <p className="text-muted text-capitalize">
                we will assist you with your inquiries
              </p>
            </div>
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
              <span className="service-icon">
                <i className="fas fa-dollar-sign"></i>
                {/* <img src="images/img_33.png" className="rounded-circle img-btn " alt="product" style="height: 120px;"> */}
              </span>
              <h5 className="font-weight-bold text-uppercase">our products</h5>
              <p className="text-muted text-capitalize">
                free 100% refund for 30 days
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mx-auto my-3 px-5">
          <div className="my-4">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control text-capitalize"
                  placeholder="search by name"
                  onChange={e => handleSearchQuery(e.currentTarget.value, PriceRange)}
                />
                <div className="input-group-prepend">
                  <span className="input-group-text form-icon">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="products-categories-title my-4">
            <h6 className="text-uppercase">
              <strong>shop by categories</strong>
            </h6>
            <div className="products-categories-underline"></div>
          </div>
          <a href="/products" className="d-block products-categories-link">
            <p className="text-capitalize mb-0">electronics</p>
          </a>
          <div className="products-categories-title my-4">
            <h6 className="text-uppercase">
              <strong>shop by price</strong>
            </h6>
            <div className="products-categories-underline"></div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="price-range">Range : ₹0 - ₹{PriceRange}</label>
              <input
                type="range"
                name="price-range"
                className="form-control-range"
                value={PriceRange/10}
                onChange={e => handlePriceRangeChange(parseInt(e.currentTarget.value)*10, Query)}
                id="price-range"
              />
            </div>
          </form>
        </div>
        <div className="col ml--4 my-3 p-4">
          <div className="row">
            <div className="container" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
            {Data.map((item, index) => 
            // <div key={index} className="mx-auto col-md-6 col-lg-4 p-2">
              <div key={index} className="product-div p-2">
              <h5 className="text-capitalize text-center my-0">{item.Name}</h5>
              <h6 className="text-center mb-2">{item.Category}</h6>
              <div className="product-container p-5">
                <img src={`assets/products/${item['Sl no']}/${item['Sl no']} - 01.jpeg`} className="img-fluid" alt="product" />
                {/* <h6 className="product-tags">5% off</h6> */}
                <a className="product-buy-link" href="/products" role="button">
                  Buy Now
                </a>
              </div>
              {/* <h6 className="text-capitalize text-center my-2">
                Product Lorem ipsum dolor sit Lorem ipsum dolor sit amet.
              </h6> */}
              <h6 className="text-center">
                {/* <span className="text-muted old-price mx-2">₹{item['Selling Price']}</span> */}
                <span className="price">
                  ₹<strong>{item['Selling Price']}</strong>
                </span>
              </h6>
              </div>
            // </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
