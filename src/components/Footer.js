import React from "react";

class Footer extends React.Component {
  render(){
    return(
      <section id="footer">
        <footer>
          <div className="container">
            <div>
              <div className="row" style={{margin: "0 auto"}}>
                <div className="col-md-4 col-sm-6 footer-column">
                  <p><strong>Site Info</strong></p>
                  <p>© 2017 | By Damon Tian</p>
                  <p>Built with: ReactJS, ExpressJS,</p>
                  <p>NodeJS, Redux, MongoDB</p>
                  <p>Bootstrap, Sass, Sketch</p>
                </div>
                <div className="col-md-3 col-sm-6 footer-column">
                  <p><strong>Contact Info</strong></p>
                  <p>Damon Tian</p>
                  <p>New York, NY</p>
                  <p>718-559-2277</p>
                  <p>damontian@live.com</p>
                </div>
                <div className="col-md-3 col-sm-6 footer-column">
                  <p><strong>Leave me a message</strong></p>
                  <form>
                    <div className="form-group">
                      <input type="text" placeholder="Enter Your Email"/>
                      <br/>
                      <textarea type="text" placeholder="Enter Your Message" rows= "1"/>
                      <br/>
                      <input type="submit" value="Send Message" />
                    </div>
                  </form>
                </div>
                <div className="col-md-2 col-sm-6 text-center footer-column">
                  <p><strong>Connect with me</strong></p>
                  <p>LinkedIn</p>
                  <p>GitHub</p>
                  <p>Angel.co</p>
                  <p>FaceBook</p>
                </div>
                <div className="col-md-2">
                  <div></div>
                </div>  
              </div>
            </div>
          </div>
        </footer>
      </section>
    )
  }
}

export default Footer;