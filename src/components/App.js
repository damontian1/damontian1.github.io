import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navigation from "./Navigation";
import WorkDetails from "./WorkDetails";
import WorkGallery from "./WorkGallery";

class App extends React.Component {
  render(){
    return(
      <div>
        <Navigation />
        <div className="container">
          <Banner />
          <WorkDetails />
          <WorkGallery />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;