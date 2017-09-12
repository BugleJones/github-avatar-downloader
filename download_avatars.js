require('dotenv').config();

var request = require("request");
var fs = require("fs");

var GITHUB_USER = "BugleJones";
var GITHUB_TOKEN = "dc225ff9ca7e47c3ac9c16175d3d13c6b0fdd733";

console.log("Welcome to the Github Avatar Downloader");

function getRepoContributors(repoOwner, repoName, cb) {
  const requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/"
  + repoOwner + "/" + repoName + "/contributors";
  var options = {
    url: requestURL,
    headers: {
    "User-Agent": "BugleJones"
  }
};

  request(options, function(err, response, body) {
    const data = JSON.parse(body);
    cb(err, data);
  });
}

function downloadImageByURL(url, filepath) {
  request.get(url)
    .on("error", function (err) {
      throw err;
    })
    .on("response", function (response) {
      console.log("Response Status Code: ", response.statusCode);
    })
    .pipe(fs.createWriteStream(filepath));
  }

getRepoContributors("jquery", "jquery", function(err, data) {
  console.log("Avatar is downloading...");
  if (err) {
    console.log("Errors: " + err);
    return;
  }

  for (var index in data) {
    var gitHubNames = data[index].login;
    var gitAvatarUrl = data[index].avatar_url;
    var filePathUsers = "./avatars/" + gitHubNames + ".jpg"
    downloadImageByURL(gitAvatarUrl, filePathUsers);
  };
});
