// Data Processing of the program, convert the data in Google Sheet so that could be displayed or visualised.

export function Question(title, type) {
  this.title = title;
  this.type = type;
  var standardans1 = {
    A: "MBP",
    B: "PMBP",
    C: "PMBP",
    D: "NMBP",
  };
  var standardans2 = {
    A: "MBP",
    B: "PMBP",
    C: "NMBP",
  };
  var standardans3 = {
    A: "MBP",
    B: "NMBP",
  };
  var standardans4 = {
    select5: "MBP",
    select4: "PMBP",
    select3: "PMBP",
    select2: "NMBP",
    select1: "NMBP",
    select0: "NMBP",
  };
  var standardans5 = {
    selectall: "MBP",
    selectnotall: "NMBP",
  };
  var standardans6 = {
    selectall: "MBP",
    selectnotall: "NMBP",
  };
  switch (this.type) {
    case "3221":
      this.standardans = standardans1;
      break;
    case "321":
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
  }
}

export function DataHandler() {
  this.array = [
    ["HPE.1", "3221"],
    ["HPE.2", "321"],
    ["HPE2.1", "false"],
    ["HPE.2.2", "false"],
    ["HPE.3", "321"],
    ["HPE.4", "321"],
    ["HPE.4.1", "false"],
    ["HPE.4.2", "false"],
    ["HPE.5", "31"],
    ["R.1", "321"],
    ["R.2", "321"],
    ["R.3", "3221"],
    ["R.3.1", "false"],
    ["R.3.2", "false"],
    ["R.4", "3221"],
    ["R.4.1", "false"],
    ["R.5", "3221"],
    ["R.6", "321"],
    ["R.7", "321"],
    ["R.8", "321"],
    ["R.9", "false"],
    ["R.9.1", "false"],
    ["R.9.2", "false"],
    ["R.10", "321"],
    ["R.11", "31"],
    ["R.12", "31"],
    ["S.1", "3221"],
    ["S.1.1", "false"],
    ["S.2", "31"],
    ["S.2.1(1)", "false"],
    ["S.2.1(2)", "false"],
    ["S.2.1(3)", "false"],
    ["S.2.1(4)", "false"],
    ["S.2.1(5)", "false"],
    ["S.2.1(6)", "false"],
    ["S.2.2", "false"],
    ["S.3", "321"],
    ["S.4", "31"],
    ["CPA.1", "321"],
    ["CPA.2", "3221"],
    ["CPA.3", "321"],
    ["CPA.3.1", "false"],
    ["CPA.4", "321"],
    ["CPA.5", "321"],
    ["OPA.1", "321"],
    ["AT.1", "31"],
    ["AT.2", "31"],
    ["AT.3", "31"],
    ["AT.4", "31"],
    ["AT.5", "321"],
    ["AT.6", "321"],
    ["AT.7", "31"],
    ["BASPA.1", "3221"],
    ["BASPA.2", "3221"],
    ["BASPA.3", "3221"],
    ["BASPA.4", "3221"],
    ["BASPA.5", "321"],
    ["PAC.1", "3221"],
    ["PAC.2", "321"],
    ["PAC.3", "31"],
    ["PAC.4", "31"],
    ["PAC.5", "321"],
    ["PAC.6", "31"],
    ["POL.1", "false"],
    ["POL.2", "false"],
    ["POL.3", "false"],
    ["POL.4", "false"],
    ["POL.5", "false"],
    ["POL.6", "false"],
    ["POL.7", "false"],
    ["POL.8", "false"],
    ["POL.9", "false"],
    ["SI.1", "321"],
    ["SI.2", "321"],
    ["FCE.1", "321"],
    ["FCE.2", "321"],
    ["FCE.3", "31"],
    ["INF.1", "select5"],
    ["INF.2", "select5"],
    ["INF.3", "select5"],
    ["INF.4", "select5"],
    ["INF.5", "select13"],
    ["INF.5", "select12"],
    ["FUND.1", "321"],
    ["FUND.2", "321"],
    ["FUND.3", "321"],
    ["FUND.4", "321"],
    ["FUND.5", "321"],
  ];
  this.questions = [];
  for (let i = 0; i < this.array.length; i++) {
    this.questions[i] = new Question(this.array[i][0], this.array[i][1]);
  }

  this.handleData = function (string, qid) {
    let stringtop = string[0];
    switch (this.questions[qid - 1].type) {
      case "3221":
        return this.questions[qid - 1].standardans[stringtop];
      case "321":
        return this.questions[qid - 1].standardans[stringtop];
      case "false":
        return string;
      case "31":
        return this.questions[qid - 1].standardans[stringtop];
      case "select5":
        var patt1 = /[ABCDEFGHIJKLMN]. /g;
        var num = string.match(patt1).length;
        var output = this.questions[qid - 1].standardans["select" + num];
        return output;
      case "select12":
        var patt1 = /[ABCDEFGHIJKLMN]. /g;
        var num = string.match(patt1).length;
        if (num === 12) {
          var result = "all";
        } else {
          var result = "notall";
        }
        var output = this.questions[qid - 1].standardans["select" + result];
        return output;
      case "select13":
        var patt1 = /[ABCDEFGHIJKLMN]. /g;
        var num = string.match(patt1).length;
        if (num === 13) {
          result = "all";
        } else {
          result = "notall";
        }
        var output = this.questions[qid - 1].standardans["select" + result];
        return output;
    }
  };

  this.handletitle = function (qid) {
    return this.questions[qid - 1].title;
  };
}

export function FetchPersonalData(email0) {
  for (let i = 0; i < this.ALL_RESPONSES.length; i++) {
    if (this.ALL_RESPONSES[i].email == email0) {
      return this.ALL_RESPONSES[i].response;
    }
  }
}

export function CountData4Graph(data) {
  var result = {
    MBP: 0,
    PMBP: 0,
    NMBP: 0,
  };
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "MBP") {
      result.MBP += 1;
    } else if (data[i] == "PMBP") {
      result.PMBP += 1;
    } else if (data[i] == "NMBP") {
      result.NMBP += 1;
    }
  }
  return result;
}

export function DataProcessor(response) {
  this.dataHandler = new DataHandler();
  var range = response;
  this.ALL_QUESTIONS = [];
  this.ALL_RESPONSES = [];
  if (range.values.length > 0) {
    // for (i = 0; i < range.values.length; i++) {
    //   var row = range.values[i];
    //   var lines = [];
    //   // Print columns A and E, which correspond to indices 0 and 4.
    //   for(j = 0; j < row.length; j++){
    //     lines += row[j];
    //   }
    //   appendPre(lines);
    // }
    var emails = [];
    for (let i = 1; i < range.values.length; i++) {
      emails.push(range.values[i][90]);
    }

    var titles = [];
    for (let i = 1; i < range.values[0].length - 2; i++) {
      this.ALL_QUESTIONS.push(this.dataHandler.handletitle(i));
    }

    var response = [];
    for (let i = 1; i < range.values.length; i++) {
      var answer = [];
      for (let j = 1; j < range.values[i].length - 2; j++) {
        answer.push(this.dataHandler.handleData(range.values[i][j], j));
      }
      response.push(answer);
    }
    for (let i = 0; i < emails.length; i++) {
      this.ALL_RESPONSES.push({ email: emails[i], response: response[i] });
    }

    // for(i=0;i<range.values.length;i++){
    //   for(j=0;j<range.values[i].length;j++){
    //     appendPre("("+i+","+j+")"+range.values[i][j])
    //   }
    // }
  } else {
    console.log("No data found.");
  }

  this.getTitles = function () {
    return this.ALL_QUESTIONS;
  };
  this.getPersonalData = function (useremail) {
    FetchPersonalData(useremail);
  };
  this.getData4Graph = function (useremail) {
    var personaldata = FetchPersonalData(useremail);
    return CountData4Graph(personaldata);
  };
}
