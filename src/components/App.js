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

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {selectedProject: "", filteredInput: "Main"}
  }
  
  componentDidMount(){
    this.props.fetchProjects();
  }

  handleClick(id, item){
    const freeCodeCampId = "5a53b514734d1d388d189126";
    const freelanceProjectsId = "5a8f5049f36d286fea352cad";
    this.setState({selectedProject: id})
    document.querySelector("#work-details").classList.remove("fade")
    if (id === freeCodeCampId || id === freelanceProjectsId) {
      if (id === freeCodeCampId) window.open('https://www.freecodecamp.org/damontian1'); 
      if (id === freelanceProjectsId) window.open('https://codepen.io/collection/XevYpy/'); 
      window.location = "/";
    }
    else {
      setTimeout(() => {
        document.querySelector("#work-details").classList.add("fade")
      }, 600)
    }
  }

  handleFilter(e){
    var buttons = document.querySelectorAll("section#work-gallery button")
    buttons.forEach(item => item.classList.add("btn-default"));
    var input = e.target.textContent;
    input = input == "Main Projects" ? "Main" : input;
    this.setState({filteredInput: input});
  }

  render(){
    return(
      <div>
        <Navigation />
        <div className="container-fluid" style={{width: "80%", margin: "0 auto"}}>
          <Banner />
          <WorkGallery handleClick={this.handleClick} handleFilter={this.handleFilter} {...this.props} {...this.state} />
          <WorkDetails {...this.props} {...this.state} />
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
