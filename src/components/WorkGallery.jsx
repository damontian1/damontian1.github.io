import React from "react";

class WorkGallery extends React.Component {
  renderList() {
    var filtered = this.props.projects
      .filter(item => item.tag.includes(this.props.filteredInput ? this.props.filteredInput : "Main"))
    return filtered.map((item, i) => {
      var isExternalLink = item.tag.includes("Side Projects") ? item.website : "#work-details";
      return (
        <div key ={i} className="col-sm-6 col-md-4" style={{margin: "1em 0em"}} onClick={(id) => {this.props.handleClick(item._id.$oid)}}>
          <a href={isExternalLink} style={{color: "black", textDecoration: "underline"}}>
            <div className="project-cover-art" style={{width: "100%", position: "relative"}}>
              <img src={item.art} style={{width: "100%"}} />
              <div className="overlay">
                <p className="overlay-text">{item.stack ? item.stack.map(item => `${item}, `) : null}etc..</p>
              </div>
              <h5><strong>{item.title}</strong><i className="fa fa-external-link" aria-hidden="true" style={{padding: "0.5em"}}></i></h5>
            </div>
          </a>
        </div>
      )
    })
  }

  render() {
    return (
      <section id="work-gallery" style={{margin: "0em 0em 0em 0em"}}>
        <div className="row">
          <div className="col-md-12">
            <div>
              <button type="button" className="btn" onClick={this.props.handleFilter}>Main Projects</button>
              <span> </span>
              <button type="button" className="btn btn-default" onClick={this.props.handleFilter}>Ruby on Rails</button>
              <span> </span>
              <button type="button" className="btn btn-default" onClick={this.props.handleFilter}>React.js</button>
              <span> </span>
              <button type="button" className="btn btn-default" onClick={this.props.handleFilter}>WordPress</button>
              <span> </span>
              <button type="button" className="btn btn-default" onClick={this.props.handleFilter}>Flask</button>
              <span> </span>
              <button type="button" className="btn btn-default" onClick={this.props.handleFilter}>Side Projects</button>
              <span> </span>
            </div>
          </div>
          {this.renderList()}
        </div>
      </section>
    );
  }
}

export default WorkGallery;