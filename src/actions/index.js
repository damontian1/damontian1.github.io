import axios from "axios";


export const fetchProjects = () => {
  const payload = axios.get("https://api.mlab.com/api/1/databases/damontian-v2/collections/projects?apiKey=jKF48pJGWpb4nShP0ufGSmUyXySG1Cn7")
  return{
    type: "FETCH_PROJECTS",
    payload
  }
}

export const postProject = () => {
  axios
    .post("https://api.mlab.com/api/1/databases/damontian-v2/collections/projects?apiKey=jKF48pJGWpb4nShP0ufGSmUyXySG1Cn7", {
      title: "React Flux Contacts Dashboard",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      stack: ["ReactJS", "ExpressJS"],
      art: "https://www.google.com",
      desktop: "https://www.twitch.tv/exbc",
      mobile: "",
      video: "https://www.youtube.com/watch?v=TTgNlfAht4I",
      github: "https://github.com/damontian1/react-flux-contacts-dashboard",
      website: "https://rails-save-the-world-petfinder.herokuapp.com"
    })
}