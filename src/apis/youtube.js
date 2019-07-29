import axios from "axios";

const KEY = "AIzaSyC8JP-xxPaC8gRacYGehkV-S_DzQACAN3M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
