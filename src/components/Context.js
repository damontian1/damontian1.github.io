import React from 'react';
import data from '../assets/data.json';
const Context = React.createContext();
export class Provider extends React.Component {

  state = {
    projects: data,
    selectedProject: "",
    handleClick: this.handleClick.bind(this)
  }

  handleClick(id, item) {
    this.setState({ selectedProject: id });
    document.querySelector("#work-details").classList.remove("fade");
    setTimeout(() => {
      document.querySelector("#work-details").classList.add("fade");
    }, 600);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider >
    )
  }
}
export const Consumer = Context.Consumer;