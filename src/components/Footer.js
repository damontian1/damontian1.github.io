import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <footer>
          <div className="container" style={{ minWidth: "400px" }}>
            <div className="footer__inner" style={{ margin: "0 auto" }}>
              <div>
                <p><strong>Site Info</strong></p>
                <p>© 2019 | By Damon Tian</p>
                <p>Built with: React.js</p>
                <p>MongoDB, Node.js, SASS</p>
                <p>Bootstrap, Sketch</p>
              </div>
              <div className="hidden-xs">
                <p><strong>Contact Info</strong></p>
                <p>Damon Tian</p>
                <p>New York, NY</p>
                <p>718-559-2277</p>
                <p>damontian@live.com</p>
              </div>
              <div className="hidden-xs visible-lg">
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
              <div className="text-center footer-column hidden-xs visible-lg">
                <p><strong>Connect with me</strong></p>
                <p><a href="https://www.linkedin.com/in/damontian1" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a href="https://github.com/damontian1" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                <p><a href="https://codepen.io/damontian1/" target="_blank" rel="noopener noreferrer">CodePen</a></p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Footer;