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


function Question(title,type){
  this.title = title;
  this.option1 = "A";
  this.option2 = "B";
  this.option3 = "C";
  this.option4 = "D";
  this.type = type;
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
  };
  var standardans3 = {
    A: "BP",
    B: "NBP",
  };
  var standardans4 = {
    select5: "BP",
    select4: "PMBP",
    select3: "PMBP",
    select2: "NBP",
    select1: "NBP",
    select0: "NBP",
  };
  var standardans5 = {
    selectall: "BP",
    notselectall: "NBP",
  };
  var standardans6 = {
    selectall: "BP",
    notselectall: "NBP",
  };

  switch(this.type){
    case "3221":
      this.standardans = standardans1;
      break;
    case "321" :
      this.standardans = standardans2;
      break;
    case "false":
      this.standardans = false;
      break;
    case "31":
      this.standardans = standardans3;
      break;
    case "select5":
      this.standardans = standardans4;
      break;
    case "select12":
      this.standardans = standardans5;
      break;
    case "select13":
      this.standardans = standardans6;
      break;
  };
}

function DataHandler(){
  this.array = [["HPE.1","3221"],["HPE.2","321"],["HPE2.1","false"],["HPE.2.2","false"],["HPE.3","321"],["HPE.4","321"],["HPE.4.1","false"],["HPE.4.2","false"],["HPE.5","31"],["R.1","321"],["R.2","321"],["R.3","3221"],["R.3.1","false"],["R.3.2","false"],["R.4","3221"],["R.4.1","false"],["R.5","3221"],["R.6","321"],["R.7","321"],["R.8","321"],["R.9","false"],["R.9.1","false"],["R.9.2","false"],["R.10","321"],["R.11","31"],["R.12","31"],["S.1","3221"],["S.1.1","false"],["S.2","31"],["S.2.1(1)","false"],["S.2.1(2)","false"],["S.2.1(3)","false"],["S.2.1(4)","false"],["S.2.1(5)","false"],["S.2.1(6)","false"],["S.2.2","false"],["S.3","321"],["S.4","31"],["CPA.1","321"],["CPA.2","3221"],["CPA.3","321"],["CPA.3.1","false"],["CPA.4","321"],["CPA.5","321"],["OPA.1","321"],["AT.1","31"],["AT.2","31"],["AT.3","31"],["AT.4","31"],["AT.5","321"],["AT.6","321"],["AT.7","31"],["BASPA.1","3221"],["BASPA.2","3221"],["BASPA.3","3221"],["BASPA.4","3221"],["BASPA.5","321"],["PAC.1","3221"],["PAC.2","321"],["PAC.3","31"],["PAC.4","31"],["PAC.5","321"],["PAC.6","31"],["POL.1","false"],["POL.2","false"],["POL.3","false"],["POL.4","false"],["POL.5","false"],["POL.6","false"],["POL.7","false"],["POL.8","false"],["POL.9","false"],["SI.1","321"],["SI.2","321"],["FCE.1","321"],["FCE.2","321"],["FCE.3","31"],["INF.1","select5"],["INF.2","select5"],["INF.3","select5"],["INF.4","select5"],["INF.5","select13"],["INF.5","select12"],["FUND.1","321"],["FUND.2","321"],["FUND.3","321"],["FUND.4","321"],["FUND.5","321"]];
  this.questions = [];
  for(i=0;i<this.array.length;i++){
    this.questions[i] = new Question(this.array[i][0],this.array[i][1]);
  }

  this.handleData = function(string, qid){
    switch(this.questions[qid].type){
      case "3221":
        stringtop = string[0];
        return this.questions[qid].standardans[stringtop];
      case "321" :
        stringtop = string[0];
        return this.questions[qid].standardans[stringtop];
      case "false":
        return string;
      case "31":
        stringtop = string[0];
        return this.questions[qid].standardans[stringtop];
      case "select5":
        return string;
      case "select12":
        return string;
      case "select13":
        return string;
    }
  }

  this.handletitle = function(qid){
    return this.questions[qid].title;
  }
}


/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listMajors() {
  this.dataHandler = new DataHandler;
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1p-CjJgmzIRmepETjpt7fJTPFiSypiebX-E0ZBUgUHX8',
    range: 'reply1',
  }).then(function(response) {
    var range = response.result;
    if (range.values.length > 0) {
      appendPre('Question,      Value');
      // for (i = 0; i < range.values.length; i++) {
      //   var row = range.values[i];
      //   var lines = [];
      //   // Print columns A and E, which correspond to indices 0 and 4.
      //   for(j = 0; j < row.length; j++){
      //     lines += row[j];
      //   }
      //   appendPre(lines);
      // }
      
      
      for(i=1;i<range.values[0].length;i++){
        colomns = [];
        colomns += this.dataHandler.handletitle(i-1)
        for(j=1;j<range.values.length;j++){
          colomns += ":   |     ";
          colomns += this.dataHandler.handleData(range.values[j][i],i-1);
          
        }
        appendPre(colomns)
      }
    } else {
      appendPre('No data found.');
    }
  }, function(response) {
    appendPre('Error: ' + response.result.error.message);
  });
}