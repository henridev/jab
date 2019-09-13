/* /**
 * Sample JavaScript code for youtube.channels.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */

// {
//   /* <button class="authoriz" onclick="authenticate().then(loadClient)">authorize and load</button>
// <button class="execute"onclick="execute()">execute</button> */
// }
const authorize = document.getElementById("authorize");
const executer = document.getElementById("execute");

authorize.onclick = authenticate.then(loadClient());
executer.onclick = execute();

function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
    .then(
      function() {
        console.log("Sign-in successful");
      },
      function(err) {
        console.error("Error signing in", err);
      }
    );
}
function loadClient() {
  gapi.client.setApiKey("YOUR_API_KEY");
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function() {
        console.log("GAPI client loaded for API");
      },
      function(err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.channels
    .list({
      part: "snippet,contentDetails,statistics",
      id: "UC_x5XG1OV2P6uZZ5FSM9Ttw"
    })
    .then(
      function(response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function(err) {
        console.error("Execute error", err);
      }
    );
}
gapi.load("client:auth2", function() {
  gapi.auth2.init({ client_id: "YOUR_CLIENT_ID" });
});

var logo = document.getElementById("main_logo");

logo.onmouseenter = hoverLogo;
logo.onmouseleave = basicLogo;

function hoverLogo() {
  logo.src = "/images/logo/hover.png";
}
function basicLogo() {
  logo.src = "/images/logo/basic.png";
}

var burger = document.getElementById("burger");
var sidebar = document.getElementById("sidebar");

burger.onclick = () => {
    sidebar.classList.toggle("is-here"),
    console.log('hello')
};
