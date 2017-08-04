const projectsReducer = (state=[], action) => {
  // console.log(actions)
  switch(action.type){
    case "FETCH_PROJECTS":
      return action.payload.data
    default:
      return state;
  }
}

export default projectsReducer;