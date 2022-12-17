import Navbar from "./Components/Navbax";
import Hero from "./Components/Hero";

import Content from "./Components/Content";
import Pom from "./Components/Pom";
import Roadmap from "./Components/Roadmap";
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";
import Info from "./Components/Info";
import Partners from "./Components/Partners";



function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-black">
       <Navbar/>
      </div>
      <Hero/>
      <Info/>
      <Content/>
      <Pom/>
      <Roadmap/>
      <Partners/>
      <Shop/>
      <Footer/>   
    </div>
  );
}

export default App;
