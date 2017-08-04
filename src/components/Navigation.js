import React from "react";

class Navigation extends React.Component {
  render(){
    return(
      <section id="navigation">
        <nav className="navbar navbar-default navbar-fixed-top" style={{padding: "0em 0em"}}>
          <div style={{width: "78%", margin: "0 auto", display: "flex", justifyContent: "space-between"}}>

                <div className="navbar-header">
                  <a href="#">
                    <img src={__dirname + "assets/logo.svg"} />
                  </a>
                </div>


                <div className="navbar-social-media" style={{fontSize: "1.2em",fontFamily: "Sarala", padding: "1em 0em 0em 1em", fontWeight: "bolder"}}>
                  <a href="#banner"><span style={{padding: "0 1em"}}>ABOUT</span></a>
                  <a href="#work-gallery"><span style={{padding: "0 1em"}}>PROJECTS</span></a>
                  <a href="#footer"><span style={{padding: "0 1em"}}>CONTACT</span></a>
                  <span style={{paddingRight: "0.8em"}}>|</span>
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
        </nav>
      </section>
    )
  }
}

export default Navigation;