import React from "react";

class WorkDetails extends React.Component {
  render(){
    return(
      <section id="work-details">
        <div className="row">
          <div className="col-md-12">
            <h4>Work Details</h4>
            <div className="jumbotron">
              <h1>hello</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <button className="btn btn-success">GO</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WorkDetails;