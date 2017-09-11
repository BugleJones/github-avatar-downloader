var request = require("request");

console.log("Welcome to the Github Avatar Downloader");

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
  console.log(requestURL);
}

var GITHUB_USER = "YOUR USERNAME HERE";
var GITHUB_TOKEN = "YOUR ACCESSTOKEN HERE";

getRepoContributors("nodejs", "node", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

getRepoContributors();
