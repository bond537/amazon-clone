import axios from "axios";

const instance = axios.create({
  //local for now
  // local: http://localhost:5001/clone-f48db/us-central1/api
  // live: https://us-central1-clone-f48db.cloudfunctions.net/api
  baseURL: "https://us-central1-clone-f48db.cloudfunctions.net/api", // the api (cloud function) url
});

export default instance;
