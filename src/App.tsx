import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Preloader from "./Components/Preloader";
import Contact from "./Components/Contact";
import Education from './Components/Education';
import About from "./Components/About";
import Welcome from "./Components/Welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Product from "./Components/Products";
function App() {
  return (
    <>
      <Router>
        <Preloader />
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/products">
            <Product/>
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
