// Client ID and API key from the Developer Console
var CLIENT_ID = '220219288045-f6l5jts83n64grpno5cae81hblhpmct0.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDcuDR9VK5_HcuvRIi9jVnaoBMQdR6SV8c';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listMajors();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listMajors() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1p-CjJgmzIRmepETjpt7fJTPFiSypiebX-E0ZBUgUHX8',
    range: 'reply1',
  }).then(function(response) {
    var range = response.result;
    if (range.values.length > 0) {
      appendPre('Timestamp, StudentID, Ans1, Ans2, Ans3');
      for (i = 0; i < range.values.length; i++) {
        var row = range.values[i];
        var lines = [];
        // Print columns A and E, which correspond to indices 0 and 4.
        for(j = 0; j < row.length; j++){
          lines += row[j];
        }
        appendPre(lines);
      }
    } else {
      appendPre('No data found.');
    }
  }, function(response) {
    appendPre('Error: ' + response.result.error.message);
  });
}

function questions(title,type){
  this.title = title;
  this.option1 = "A";
  this.option2 = "B";
  this.option3 = "C";
  this.option4 = "D";
  var standardans1 = {
    A: "BP",
    B: "PMBP",
    C: "PMBP",
    D: "NBP",
  };
  var standardans2 = {
    A: "BP",
    B: "PMBP",
    C: "NBP",
  }
  switch(type){
    case "3221":
      this.standardans = standardans1;
    case "321" :
      this.standardans = standardans2;
    case "false":
      this.standardans = false;
  }

}


function ansSheet(){
  this.array[["HPE.1","3221"],["HPE.2","321"],[""]]
}