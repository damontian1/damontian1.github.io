import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <footer>
          <div className="container">
            <div>
              <div className="row" style={{ margin: "0 auto" }}>
                <div className="col-md-4 col-sm-6 footer-column">
                  <p><strong>Site Info</strong></p>
                  <p>© 2017 | By Damon Tian</p>
                  <p>Built with: ReactJS, ExpressJS,</p>
                  <p>NodeJS, Redux, MongoDB</p>
                  <p>Bootstrap, Sass, Sketch</p>
                </div>
                <div className="col-md-3 col-sm-6 footer-column visible-sm-block">
                  <p><strong>Contact Info</strong></p>
                  <p>Damon Tian</p>
                  <p>New York, NY</p>
                  <p>718-559-2277</p>
                  <p>damontian@live.com</p>
                </div>
                <div className="col-md-3 col-sm-6 footer-column visible-sm-block">
                  <p><strong>Leave me a message</strong></p>
                  <form acceptCharset="UTF-8" action="https://usebasin.com/f/5aaaf691b8a9" method="POST">
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Enter Your Email" />
                      <br />
                      <textarea name="message" placeholder="Enter Your Message" rows="1" />
                      <br />
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-2 col-sm-6 text-center footer-column visible-sm-block">
                  <p><strong>Connect with me</strong></p>
                  <p><a href="https://www.linkedin.com/in/damontian1" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                  <p><a href="https://github.com/damontian1" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                  <p><a href="https://angel.co/damontian1" target="_blank" rel="noopener noreferrer">Angel.co</a></p>
                  <p><a href="https://codepen.io/damontian1/" target="_blank" rel="noopener noreferrer">CodePen</a></p>
                </div>
                <div className="col-md-2">
                  <div />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Footer;