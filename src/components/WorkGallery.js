import React from "react";

class WorkGallery extends React.Component {
  
  renderList(){
    var filtered = this.props.projects.filter(item => item.stack.includes(this.props.filteredInput ? this.props.filteredInput : "JavaScript"));
    return filtered.map((item, i) => {
      return(
        <div key ={i} className="col-sm-6 col-md-4" style={{margin: "1em 0em"}} onClick={(id) => {this.props.handleClick(item._id.$oid)}}>
          <a href="#work-details" style={{color: "black", textDecoration: "underline"}}>
            <div className="project-cover-art" style={{width: "100%", position: "relative"}}>
              <img src={item.art} style={{width: "100%"}} />
              <div className="overlay">
                <p className="overlay-text">{item.stack ? item.stack.map(item => `${item}, `) : null}</p>
              </div>
              <h5><strong>{item.title}</strong><i className="fa fa-external-link" aria-hidden="true" style={{padding: "0.5em"}}></i></h5>
            </div>
          </a>
          

        </div>
      )
    })
  }

  render(){
    return(
      <section id="work-gallery" style={{margin: "0em 0em 0em 0em"}}>
        <div className="row">
          <div className="col-md-12">
            <div>
              <button type="button" className="btn" onClick={this.props.handleFilter}>All</button>
              <span> </span>
              <button type="button" className="btn btn-default" onClick={this.props.handleFilter}>Ruby on Rails</button>
              <span> </span>
              <button type="button" className="btn btn-default" onClick={this.props.handleFilter}>React.js</button>
              <span> </span>
              <button type="button" className="btn btn-default" onClick={this.props.handleFilter}>WordPress</button>
              <span> </span>
              <button type="button" className="btn btn-default" onClick={this.props.handleFilter}>Flask</button>
              <span> </span>
            </div>
          </div>
          {this.renderList()}
          {/* this is a placeholder poster art that shows more projects under way
          <div className="col-sm-6 col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="project-cover-art" style={{width: "100%", position: "relative"}}>
                <img src="https://firebasestorage.googleapis.com/v0/b/damontian-v2-images.appspot.com/o/art%2Fmore-projects.png?alt=media&token=749e46d5-4649-48c1-840b-8912a7d61955" style={{width: "100%"}} />
                <div className="overlay">
                  <p className="overlay-text"></p>
                </div>
              </div>
            </a>
            <h5><strong>More Projects Under Way...</strong></h5>
          </div>*/}
        </div>
      </section>
    )
  }
}

export default WorkGallery;