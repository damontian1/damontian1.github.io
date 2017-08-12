import axios from "axios";


export const fetchProjects = () => {
  const payload = axios.get("https://api.mlab.com/api/1/databases/damontian-v2/collections/projects?apiKey=8eIW7E_T5KozdXvYY-6Fyx_PnH3YARhs")
  return{
    type: "FETCH_PROJECTS",
    payload
  }
}

export const postProject = () => {
  axios
    .post("https://api.mlab.com/api/1/databases/damontian-v2/collections/projects?apiKey=8eIW7E_T5KozdXvYY-6Fyx_PnH3YARhs", {
      title: "More Projects Under Way..",
      art: "https://firebasestorage.googleapis.com/v0/b/damontian-v2-images.appspot.com/o/art%2Fmore-projects.png?alt=media&token=749e46d5-4649-48c1-840b-8912a7d61955"
    })
} 