require('dotenv').config();

var request = require("request");
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
    var data = JSON.parse(body)
    console.log(data);
  });
}


getRepoContributors("jquery", "jquery", function(err, result, body) {
  if (error) {
    console.log("Errors: " + err);
    return;
  }
  console.log("Result:", result);
});

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
