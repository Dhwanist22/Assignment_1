let name = "Dhwani Thobhani";
let description = "My name is Dhwani Thobhani. My RedID is 824452402. I am an international graduate student at San Diego State University pursuing my masters in Computer Science. I am very much interested in web development.";
let gitHubRepo = "https://www.github.com/Dhwanist22";
let photoUrl = "photo.heic";
const element = React.createElement("div", {
  id: "parentDiv"
}, React.createElement("h1", {
  id: "name"
}, name), React.createElement("div", {
  id: "photoDiv"
}, React.createElement("img", {
  id: "photo",
  src: photoUrl
})), React.createElement("div", {
  id: "descDiv"
}, React.createElement("p", null, description)), React.createElement("div", {
  id: "buttonDiv"
}, React.createElement("a", {
  className: "button",
  target: "_blank",
  href: gitHubRepo
}, "View My Github Repo")));
ReactDOM.render(element, document.getElementById("content"));