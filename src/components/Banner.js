import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <section id="banner" style={{ padding: "5em 0em" }}>
        <div className="row">
          <div className="banner__text col-md-8 col-md-offset-2 text-center">
            <h1 style={{ padding: "1em 0em 0em 0em", fontWeight: "bolder" }}>Hey, you found me! I’m Damon, a Web Developer based in New York City and I love building beautiful and intuitive web applications.</h1>
            <hr />
            <h4 style={{ maxWidth: "90%", margin: "0 auto", padding: "0 0 1em", lineHeight: "25px" }}><strong>My Top Skills:</strong> HTML/CSS, JavaScript, React.js, Laravel, Statamic CMS, Node.js/Express.js, Docker, Ruby, Ruby on Rails, MongoDB, MySQL, PostgreSQL, WordPress, Git/Github, Bootstrap, Sketch</h4>
            <div>
              <a className="btn btn-default" target="_blank" href="https://drive.google.com/file/d/17hPBvj_j4x9EQ9xdu-npg9hrNG9VKUA4/view">RESUME</a>
              <a className="btn btn-default" href="#footer" style={{ marginLeft: "1em" }}>SEND A MESSAGE</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;