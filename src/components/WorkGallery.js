import React from "react";

class WorkGallery extends React.Component {
  render(){
    return(
      <section id="work-gallery">
        <div className="row">
          <div className="col-md-12">
            <h4>Projects</h4>
          </div>
          <div className="col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="movie-cover-art" style={{width: "100%", height: "300px", background: "lightgreen", borderRadius: "5px"}}></div>
            </a>
            <h5>Project 1</h5>
          </div>
          <div className="col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="movie-cover-art" style={{width: "100%", height: "300px", background: "lightgreen", borderRadius: "5px"}}></div>
            </a>
            <h5>Project 2</h5>
          </div>
          <div className="col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="movie-cover-art" style={{width: "100%", height: "300px", background: "lightgreen", borderRadius: "5px"}}></div>
            </a>
            <h5>Project 3</h5>
          </div>
          <div className="col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="movie-cover-art" style={{width: "100%", height: "300px", background: "lightgreen", borderRadius: "5px"}}></div>
            </a>
            <h5>Project 4</h5>
          </div>
          <div className="col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="movie-cover-art" style={{width: "100%", height: "300px", background: "lightgreen", borderRadius: "5px"}}></div>
            </a>
            <h5>Project 5</h5>
          </div>
          <div className="col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="movie-cover-art" style={{width: "100%", height: "300px", background: "lightgreen", borderRadius: "5px"}}></div>
            </a>
            <h5>More Projects under way..</h5>
          </div>
        </div>
      </section>
    )
  }
}

export default WorkGallery;