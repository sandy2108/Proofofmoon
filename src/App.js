import Navbar from "./Components/Navbax";
import Hero from "./Components/Hero";

import Content from "./Components/Content";
import Pom from "./Components/Pom";
import Roadmap from "./Components/Roadmap";
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";



function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-black">
       <Navbar/>
      </div>
      <Hero/>
      <Content/>
      <Pom/>
      <Roadmap/>
      <Shop/>
      <Footer/>
     
      
      
    </div>
  );
}

export default App;
