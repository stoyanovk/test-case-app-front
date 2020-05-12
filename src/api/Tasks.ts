import RequestSource from "../lib/RequestSource";
import CONFIG from "../config";

const projects = new RequestSource({
  url: CONFIG.API_URL,
  name: "projects",
  subName: "tasks",
});

export default projects;
