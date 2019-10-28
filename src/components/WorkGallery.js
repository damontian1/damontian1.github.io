import React from "react";
import { Consumer } from './Context';

class WorkGallery extends React.Component {
  render() {
    return (
      <Consumer>
        {props => {
          function renderList() {
            var filtered = props.projects
              .filter(item => item.tag.includes(props.filteredInput ? props.filteredInput : "Main"))
            return filtered.map((item, i) => {
              var isExternalLink = item.tag.includes("Side Projects") ? item.website : "#work-details";
              return (
                <div key={i} style={{ margin: "1em 0em" }} onClick={(id) => { props.handleClick(item.id) }}>
                  <a href={isExternalLink} style={{ color: "black", textDecoration: "underline" }}>
                    <div className="project-cover-art" style={{ width: "100%", position: "relative" }}>
                      <img src={item.art} style={{ width: "100%" }} />
                      <h5><strong>{item.title}</strong><i className="fa fa-external-link" aria-hidden="true" style={{ padding: "0.5em" }}></i></h5>
                    </div>
                  </a>
                </div>
              )
            })
          }
          return (
            <section id="work-gallery" style={{ margin: "0em 0em 0em 0em" }}>
              <div>
                {renderList()}
              </div>
            </section>
          )
        }}
      </Consumer>
    );
  }
}

export default WorkGallery;