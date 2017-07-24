import React from "react";

class Navigation extends React.Component {
  render(){
    return(
      <section id="navigation">
        <nav className="navbar navbar-default navbar-fixed-top" style={{padding: "0em 0em"}}>
          <div className="container">
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <div className="navbar-header">
                <a href="#">
                  <img src={__dirname + "assets/logo.svg"} />
                </a>
              </div>
              <div className="navbar-social-media">
                <a href="https://www.linkedin.com/in/damontian1/" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/damontian1/" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://angel.co/damontian1" target="_blank">
                  <i className="fa fa-angellist" aria-hidden="true"></i>
                </a>
                <a href="https://www.facebook.com/damontian1" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
    )
  }
}

export default Navigation;