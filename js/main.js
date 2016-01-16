var user;

var request = require('request');
var github_user_id = ""

if(github_user_id == ""){
  github_user_id = prompt("Enter GitHub user name to querry : ");
}


request('https://api.github.com/users/' + github_user_id, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    user = body;
    console.log("NO ERROR.");
  } else {
    console.log(error);
    console.log("ERROR!");
  }
});

function console_show_user_info() {
  console.log("console_show_user_info() called");
  console.log(user);
}

document.getElementById("ghUserInfoButton").onclick = console_show_user_info;
