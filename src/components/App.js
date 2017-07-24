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
          <WorkGallery />
          <WorkDetails />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;