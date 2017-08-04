import React from "react";

class WorkGallery extends React.Component {
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
          <div className="col-sm-6 col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="project-cover-art" style={{width: "100%", position: "relative"}}>
                <img src="../../assets/save-the-world-banner.png" style={{width: "100%"}} />
                <div className="overlay">
                  <p className="overlay-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </a>
            <h4><strong>SAVE THE WORLD</strong></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-sm-6 col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="project-cover-art" style={{width: "100%", position: "relative"}}>
                <img src="../../assets/truckly-banner.png" style={{width: "100%"}} />
                <div className="overlay">
                  <p className="overlay-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </a>
            <h4><strong>TRUCKLY</strong></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-sm-6 col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="project-cover-art" style={{width: "100%", position: "relative"}}>
                <img src="../../assets/youtube-top-media-banner.png" style={{width: "100%"}} />
                <div className="overlay">
                  <p className="overlay-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </a>
            <h4><strong>YOUTUBE TOP MEDIA</strong></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-sm-6 col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="project-cover-art" style={{width: "100%", position: "relative"}}>
                <img src="../../assets/contacts-dashboard-banner.png" style={{width: "100%"}} />
                <div className="overlay">
                  <p className="overlay-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </a>
            <h4><strong>CONTACTS DASHBOARD</strong></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-sm-6 col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="project-cover-art" style={{width: "100%", position: "relative"}}>
                <img src="../../assets/save-the-world-banner.png" style={{width: "100%"}} />
              </div>
            </a>
            <h4><strong>COLBIE'S STYLE</strong></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-sm-6 col-md-4" style={{margin: "1em 0em"}}>
            <a href="#work-details">
              <div className="project-cover-art" style={{width: "100%", position: "relative"}}>
                <img src="../../assets/more-projects.png" style={{width: "100%"}} />
              </div>
            </a>
            <h4><strong>MORE PROJECTS UNDER WAY..</strong></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default WorkGallery;