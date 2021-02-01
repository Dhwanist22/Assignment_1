let name = "Dhwani Thobhani";
let description = "My name is Dhwani Thobhani. My RedID is 824452402. I am an international graduate student at San Diego State University pursuing my masters in Computer Science. I am very much interested in web development.";
let gitHubRepo = "https://www.github.com/Dhwanist22";
let photoUrl = "photo.heic";

const element = (
    <div id="parentDiv">
        <h1 id="name">{name}</h1>
        <div id="photoDiv">
            <img id="photo" src={photoUrl}></img>
        </div>
        <div id="descDiv">
            <p>{description}</p>
        </div>
        <div id="buttonDiv">
            <a className="button" target="_blank" href={gitHubRepo}>View My Github Repo</a>
        </div>
    </div>
);

ReactDOM.render(element,document.getElementById("content"));
