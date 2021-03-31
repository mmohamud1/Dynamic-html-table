tableData = [
  ["", "", "Protect", "Detect", "Respond", "Overall Risk Rating"],
  ["PR.IP-1", "PR.AC-1", "DE.CM-7", "DE.CM-3", "RS.MI-3", "RS.AN-5"],
  [
    "Organisational InfoSec Risks",
    "External data breach",
    ["99%", "Ok", [1.1171, 1.1241, 1.1262, 1.1381, 1.1471]],
    ["52%", "Degraded", [1.1171, 1.1241, 1.1262, 1.1221, 1.1171]],
    ["93%", "Ok", [1.1171, 1.1241, 1.1262, 1.1381, 1.1391]],
    ["23%", "Failed", [1.3171, 1.2741, 1.2262, 1.1781, 1.1291]],
    ["83%", "Ok", [1.1171, 1.1241, 1.1262, 1.1381, 1.1471]],
    ["13%", "Failed", [1.3171, 1.3741, 1.2262, 1.1781, 1.1291]],
    ["72%", "Degraded", [1.1171, 1.1241, 1.1162, 1.1321, 1.1171]],
  ],
  [
    "Internal data breach",
    ["100%", "Ok", [1, 1, 1, 1, 1]],
    ["100%", "Ok", [1, 1, 1, 1, 1]],
    ["100%", "Ok", [1, 1, 1, 1, 1]],
    ["100%", "Ok", [1, 1, 1, 1, 1]],
    ["100%", "Ok", [1, 1, 1, 1, 1]],
    ["100%", "Ok", [1, 1, 1, 1, 1]],
    ["100%", "Ok", [1, 1, 1, 1, 1]],
  ],
  [
    "Denial/Distributed Denial of Service",
    ["50%", "Degraded", [0.5, 0.5, 0.5, 0.5, 0.5]],
    ["50%", "Degraded", [0.5, 0.5, 0.5, 0.5, 0.5]],
    ["50%", "Degraded", [0.5, 0.5, 0.5, 0.5, 0.5]],
    ["50%", "Degraded", [0.5, 0.5, 0.5, 0.5, 0.5]],
    ["50%", "Degraded", [0.5, 0.5, 0.5, 0.5, 0.5]],
    ["50%", "Degraded", [0.5, 0.5, 0.5, 0.5, 0.5]],
    ["50%", "Degraded", [0.5, 0.5, 0.5, 0.5, 0.5]],
  ],
  [
    "Supply Chain Security compromise",
    ["0%", "Failed", [0, 0, 0, 0, 0]],
    ["0%", "Failed", [0, 0, 0, 0, 0]],
    ["0%", "Failed", [0, 0, 0, 0, 0]],
    ["0%", "Failed", [0, 0, 0, 0, 0]],
    ["0%", "Failed", [0, 0, 0, 0, 0]],
    ["0%", "Failed", [0, 0, 0, 0, 0]],
    ["0%", "Failed", [0, 0, 0, 0, 0]],
  ],
];

for (i = 0; i < tableData.length; i++) {
    
}

// Get Dom elemnts
var container = document.getElementById("table-container");
var table = document.createElement("table");
//////////////////////////////////////////////////////////// ROW 1 //////////////////////////////////////////
var tr = table.insertRow(0);
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");
var th4 = document.createElement("th");

// Add classes
table.className = "table";
td1.className = "b-0";
td2.className = "b-0";
th1.className = "col-h";
th2.className = "col-h";
th3.className = "col-h";
th4.className = "col-h";

// Add col & row spans
td1.rowSpan = "2";
td2.rowSpan = "2";
th1.colSpan = "2";
th2.colSpan = "2";
th3.colSpan = "2";
th4.rowSpan = "2";

// Add scope
th1.scope = "colgroup";
th2.scope = "colgroup";
th3.scope = "colgroup";
th4.scope = "rowgroup";

// inner html
td1.innerHTML = "";
td2.innerHTML = "";
th1.innerHTML = "Test";
th2.innerHTML = "Test";
th3.innerHTML = "Test";
th4.innerHTML = "Test";

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);

//////////////////////////////////////////////////////////// ROW 2 //////////////////////////////////////////

var tr2 = table.insertRow(1);

var th5 = document.createElement("th");
var th6 = document.createElement("th");
var th7 = document.createElement("th");
var th8 = document.createElement("th");
var th9 = document.createElement("th");
var th10 = document.createElement("th");

th5.className = "col-h";
th6.className = "col-h";
th7.className = "col-h";
th8.className = "col-h";
th9.className = "col-h";
th10.className = "col-h";

th5.scope = "col";
th6.scope = "col";
th7.scope = "col";
th8.scope = "col";
th9.scope = "col";
th10.scope = "col";

th5.innerHTML = "Test";
th6.innerHTML = "Test";
th7.innerHTML = "Test";
th8.innerHTML = "Test";
th9.innerHTML = "Test";
th10.innerHTML = "Test";

tr2.appendChild(th5);
tr2.appendChild(th6);
tr2.appendChild(th7);
tr2.appendChild(th8);
tr2.appendChild(th9);
tr2.appendChild(th10);

// ADD TABLE TO DIV
container.appendChild(table);
