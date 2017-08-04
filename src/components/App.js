import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Banner from "./Banner";
import Footer from "./Footer";
import Navigation from "./Navigation";
import WorkDetails from "./WorkDetails";
import WorkGallery from "./WorkGallery";

import { fetchProjects, postProject } from "../actions";

class App extends React.Component {
  
  componentDidMount(){
    this.props.fetchProjects()
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <Navigation />
        <div className="container-fluid" style={{width: "80%", margin: "0 auto"}}>
          <Banner />
          <WorkGallery />
          <WorkDetails />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchProjects, postProject} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
