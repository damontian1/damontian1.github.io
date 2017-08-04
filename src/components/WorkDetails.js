import React from "react";

class WorkDetails extends React.Component {
  render(){
    return(
      <section id="work-details" style={{margin: "15em 0em"}}>
        <div className="row">
          <div className="col-md-8">
            <img src="https://firebasestorage.googleapis.com/v0/b/damontian-v2-images.appspot.com/o/desktop%2Fsavetheworld.jpg?alt=media&token=bcb85251-a424-46df-9c5f-ae0678f12101" style={{width: "100%"}} />
          </div>
          <div className="col-md-4">
            <div style={{padding: "0em 2em 2em 2em"}}>
              <h2 style={{fontWeight: "bolder"}}>Save The World</h2>
              <hr/>
              <p>
                <span className="project-description">Website</span>
                <a href="">https://github.com/damontian1/rails-truckly-food-truck</a>
              </p>
              <p>
                <span className="project-description">Github</span>
                <a href="">https://github.com/damontian1/rails-truckly-food-truck</a>
              </p>
              <p>
                <span className="project-description">Tech Stack</span>
                  <span className="tag">Ruby on Rails</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">JQuery</span>
                  <span className="tag">BootStrap</span>
              </p>
              <hr/>
            </div>
            <div style={{textAlign: "center", padding: "1em 0em"}}>
              <img src="https://firebasestorage.googleapis.com/v0/b/damontian-v2-images.appspot.com/o/mobile%2Fsavetheworld-mobile.jpg?alt=media&token=b18d6e7d-2ab7-4717-a6ec-47a647ad7667" style={{width: "80%"}}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WorkDetails;