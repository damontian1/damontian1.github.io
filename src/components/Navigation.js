import React from "react";

class Navigation extends React.Component {
  render(){
    return(
      <section id="navigation">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div style={{display: "flex", justifyContent: "space-between", width: "95%", margin: "0 auto"}}>

            <div className="navbar-header">
              <a href="#">Brand</a>
            </div>
            <div className="navbar-social-media">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <i className="fa fa-github" aria-hidden="true"></i>
              <i className="fa fa-angellist" aria-hidden="true"></i>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>

          </div>
        </nav>
      </section>
    )
  }
}

export default Navigation;