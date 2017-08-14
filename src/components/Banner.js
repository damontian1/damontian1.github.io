import React from "react";

class Banner extends React.Component {
  render(){
    return(
      <section id="banner" style={{padding: "5em 0em"}}>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
              <h1 style={{padding: "1em 0em 0em 0em", fontWeight: "bolder", }}>Hey, you found me! I’m Damon, a Web Developer based in New York City and I love building beautiful and intuitive web applications.</h1>
              <hr/>
              <a className="btn btn-default" href="https://firebasestorage.googleapis.com/v0/b/damontian-v2-images.appspot.com/o/documents%2Fdamon-tian-resume-v2.pdf?alt=media&token=a279ae27-87d2-4257-bcf3-2e0a82e392da">RESUME</a> 
              <a className="btn btn-default" href="#footer" style={{marginLeft: "1em"}}>SEND A MESSAGE</a>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner;