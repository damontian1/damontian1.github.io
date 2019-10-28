import React from "react";
import { Consumer } from './Context';

class WorkDetails extends React.Component {
  render() {
    return (
      <Consumer>
        {props => {

          function renderList(id) {
            var selectedProject = props.projects.filter((item) => {
              return item.id === id;
            })
            return (
              <div>
                <div className="col-md-8">
                  <img src={selectedProject[0].desktop} style={{ width: "100%" }} />
                </div>
                <div className="col-md-4">
                  <div className="space hidden-md"></div>
                  <div style={{ padding: "0em 2em 2em 2em" }}>
                    <h2 style={{ fontWeight: "bolder", margin: "0" }}>{selectedProject[0].title}</h2>
                    <hr />
                    <p>
                      <span className="project-description">Objective</span>
                      <span>{selectedProject[0].objective}</span>
                    </p>
                    <p>
                      <span className="project-description">Website</span>
                      <a href={selectedProject[0].website} target="_blank">{selectedProject[0].website}</a>
                    </p>
                    <p>
                      <span className="project-description">Github</span>
                      <a href={selectedProject[0].github} target="_blank">{selectedProject[0].github}</a>
                    </p>
                    <p>
                      <span className="project-description">Tech Stack</span>
                      {
                        selectedProject[0].stack.map((item, i) => {
                          return (
                            <span className="tag" key={i}>{item}</span>
                          )
                        })
                      }
                    </p>
                    <hr />
                  </div>
                  <div style={{ textAlign: "center", padding: "1em 0em" }}>
                    <img src={selectedProject[0].mobile} style={{ width: "65%" }} />
                  </div>
                </div>
              </div>
            )
          }

          return (
            <section id="work-details" style={{ opacity: "0" }}>
              <div className="row">
                {props.selectedProject != "" ? renderList(props.selectedProject) : null}
              </div>
            </section>
          )

        }}
      </Consumer>
    )
  }
}

export default WorkDetails;