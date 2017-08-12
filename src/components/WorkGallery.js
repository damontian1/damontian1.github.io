import React from "react";

class WorkGallery extends React.Component {
  
  renderList(){
    return this.props.projects.map((item, i) => {
      return(
        <div key ={i} className="col-sm-6 col-md-4" style={{margin: "1em 0em"}} onClick={(id) => {this.props.handleClick(item._id.$oid)}}>
          <a href="#work-details">
            <div className="project-cover-art" style={{width: "100%", position: "relative"}}>
              <img src={item.art} style={{width: "100%"}} />
              <div className="overlay">
                <p className="overlay-text">{item.stack ? item.stack.map(item => `${item}, `) : null}</p>
              </div>
            </div>
          </a>
          <h5><strong>{item.title}</strong></h5>
        </div>
      )
    })
  }

  render(){
    return(
      <section id="work-gallery" style={{margin: "0em 0em 15em 0em"}}>
        <div className="row">
          <div className="col-md-12">
            <div>
              <button type="button" className="btn btn-default">All</button>
              <span> </span>
              <button type="button" className="btn btn-default">Ruby</button>
              <span> </span>
              <button type="button" className="btn btn-default">JavaScript</button>
              <span> </span>
              <input type="text" placeholder="Search Projects by Technology Used" style={{padding: "6px 12px", borderRadius: "4px", border: "1px solid lightgray"}}/>
            </div>
          </div>
          {this.renderList()}
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
        </div>
        </div>
      </section>
    )
  }
}

export default WorkGallery;