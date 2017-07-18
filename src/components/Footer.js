import React from "react";

class Footer extends React.Component {
  render(){
    return(
      <section id="footer">
        <footer>
          <div>
            <div className="row" style={{margin: "0 auto"}}>
              <div className="col-md-2 col-md-offset-2 footer-column">
                <p>Site Information</p>
                <p>© 2017</p>
                <p style={{width: "75%", lineHeight: "28px"}}>Built with: ReactJS, ExpressJS, NodeJS, Redux, MongoDB</p>
              </div>
              <div className="col-md-2 footer-column">
                <p>Contact</p>
                <p>Damon Tian</p>
                <p>New York, NY</p>
                <p>718-559-2277</p>
                <p>damontian@live.com</p>
              </div>
              <div className="col-md-2 footer-column">
                <p>Send me a message</p>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Name" style={{width: "100%"}}/>
                    <br/>
                    <input type="email" placeholder="Email Address" />
                    <br/>
                    <input type="submit" placeholder="Send Message" />
                  </div>
                </form>
              </div>
              <div className="col-md-2 text-center footer-column">
                <p>Connect with me</p>
                <p>GitHub</p>
                <p>LinkedIn</p>
                <p>Angel.co</p>
                <p>FaceBook</p>
              </div>
              <div className="col-md-2">
                <div></div>
              </div>  
            </div>
          </div>
        </footer>
      </section>
    )
  }
}

export default Footer;