import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Preloader from './Components/Preloader'
import Services from './Components/Services'
import Welcome from './Components/Welcome'

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Welcome />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
