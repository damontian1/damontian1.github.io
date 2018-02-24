import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <section id="navigation">
        <nav className="navbar navbar-default navbar-fixed-top" style={{ padding: "0em 0em" }}>
          <div className="container-fluid navigationStyle">
            <div className="row">

              <div className="col-md-2 col-xs-3">
                <div className="navbar-header">
                  <a href="/">
                    <img src="https://firebasestorage.googleapis.com/v0/b/damontian-v2-images.appspot.com/o/logo%2Flogo.png?alt=media&token=2ed2e538-9dc4-4bf9-bd19-c2a0e81a34ad"/>
                  </a>
                </div>
              </div>

              <div className="col-md-8 col-md-offset-2 col-xs-9 text-right">
                <div className="navbar-social-media">
                  <a href="#banner"><span>ABOUT</span></a>
                  <a href="#work-gallery"><span>PROJECTS</span></a>
                  <a href="#footer"><span>CONTACT</span></a>
                  <span className="hidden-xs hidden-sm">
                    <span style={{paddingRight: "0.8em"}}>|</span>
                    <a href="https://www.linkedin.com/in/damontian1" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin" aria-hidden="true"></i> 
                    </a>
                    <a href="https://github.com/damontian1" target="_blank">
                      <i className="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://angel.co/damontian1" target="_blank">
                      <i className="fa fa-angellist" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.facebook.com/damontian1" target="_blank">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Navigation;