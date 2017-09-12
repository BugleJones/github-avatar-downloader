require('dotenv').config();

var request = require("request");
var fs = require("fs");

var GITHUB_USER = "BugleJones";
var GITHUB_TOKEN = "dc225ff9ca7e47c3ac9c16175d3d13c6b0fdd733";

console.log("Welcome to the Github Avatar Downloader");

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = "https://" + GITHUB_USER + ":" + GITHUB_TOKEN + "@api.github.com/repos/"
  + repoOwner + "/" + repoName + "/contributors";
  var options = {
    url: requestURL,
    headers: {
    "User-Agent": "BugleJones"
  }
};

  request.get(options, function(error, response, body) {
    const data = JSON.parse(body);
    data.forEach((repo) => {
      console.log(repo.login, repo.avatar_url);
    });
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
    .pipe(fs.createWriteStream('./testImage.jpg'));
  }


getRepoContributors("jquery", "jquery", function(err, result, body) {
  if (error) {
    console.log("Errors: " + err);
    return;
  }
    console.log("Result:", result);
});

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");

// console.log(options);
//
// getRepoContributors("jquery", "jquery", function(err, result, body) {
//   if (error) {
//     console.log("Errors: " + err);
//     return;
//   }
//   const data = JSON.parse(body);
//   data.ForEach((repo) => {
//     console.log(repo.name, repo.avatar_url);
//   });
//   console.log("Result:", result);
//   console.log("Body:", body);
//  });
//
// }
