import React from 'react';
import Banner from "./Banner";
import Footer from "./Footer";
import Navigation from "./Navigation";
import WorkDetails from "./WorkDetails";
import WorkGallery from "./WorkGallery";
import { Provider } from './Context';

class App extends React.Component {

  render() {
    return (
      <Provider>
        <Navigation />
        <div className="container-fluid" style={{ width: "80%", margin: "0 auto", minWidth: "400px" }}>
          <Banner />
          <WorkGallery />
          <WorkDetails />
        </div>
        <Footer />
      </Provider >
    )
  }
}

export default App;