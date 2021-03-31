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
var container = document.getElementById('table-container')
var table = document.createElement('table');
//////////////////////////////////////////////////////////// ROW 1 //////////////////////////////////////////
var tr = table.insertRow(0);
var td1 = document.createElement('td')
var td2 = document.createElement('td')
var th1 = document.createElement('th')
var th2 = document.createElement('th')
var th3 = document.createElement('th')
var th4 = document.createElement('th')

// Add classes
table.className = 'table'
td1.className = 'b-0'
td2.className = 'b-0'
th1.className = 'col-h'
th2.className = 'col-h'
th3.className = 'col-h'
th4.className = 'col-h'

// Add col & row spans
td1.rowSpan = "2"
td2.rowSpan = "2"
th1.colSpan = "2"
th2.colSpan = "2"
th3.colSpan = "2"
th4.rowSpan = "2"

// Add scope 
th1.scope = "colgroup"
th2.scope = "colgroup"
th3.scope = "colgroup"
th4.scope = "rowgroup"

// inner html
td1.innerHTML = ''
td2.innerHTML = ''
th1.innerHTML = 'Test'
th2.innerHTML = 'Test'
th3.innerHTML = 'Test'
th4.innerHTML = 'Test'

tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
tr.appendChild(th4)

//////////////////////////////////////////////////////////// ROW 2 //////////////////////////////////////////

var tr2 = table.insertRow(1)

var th5 = document.createElement('th')
var th6 = document.createElement('th')
var th7 = document.createElement('th')
var th8 = document.createElement('th')
var th9 = document.createElement('th')
var th10 = document.createElement('th')

th5.className = 'col-h'
th6.className = 'col-h'
th7.className = 'col-h'
th8.className = 'col-h'
th9.className = 'col-h'
th10.className = 'col-h'

th5.scope = 'col'
th6.scope = 'col'
th7.scope = 'col'
th8.scope = 'col'
th9.scope = 'col'
th10.scope = 'col'

th5.innerHTML = 'Test'
th6.innerHTML = 'Test'
th7.innerHTML = 'Test'
th8.innerHTML = 'Test'
th9.innerHTML = 'Test'
th10.innerHTML = 'Test'

tr2.appendChild(th5)
tr2.appendChild(th6)
tr2.appendChild(th7)
tr2.appendChild(th8)
tr2.appendChild(th9)
tr2.appendChild(th10)


// ADD TABLE TO DIV
container.appendChild(table)










//////////////////////////////////////////////////////////////GRAPH 1////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-1");
// Remove Watermark
stage.credits().enabled(false);
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.1171, 1.1241, 1.1262, 1.1381, 1.1471]);
// chart colours
chart1.fill("rgba(36,214,131,0.4)");
chart1.stroke("#24d683");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 2////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-2");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.1171, 1.1241, 1.1262, 1.1221, 1.1171]);
// chart colours
chart1.fill("rgba(255,187,83,0.4)");
chart1.stroke("#ffbb53");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 3////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-3");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.1171, 1.1241, 1.1262, 1.1381, 1.1391]);
// chart colours
chart1.fill("rgba(36,214,131,0.4)");
chart1.stroke("#24d683");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 4////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-4");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.3171, 1.2741, 1.2262, 1.1781, 1.1291]);
// chart colours
chart1.fill("rgba(255,67,64,0.4)");
chart1.stroke("#ff4340");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 5////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-5");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.1171, 1.1241, 1.1262, 1.1381, 1.1471]);
// chart colours
chart1.fill("rgba(36,214,131,0.4)");
chart1.stroke("#24d683");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 6////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-6");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.3171, 1.3741, 1.2262, 1.1781, 1.1291]);
// chart colours
chart1.fill("rgba(255,67,64,0.4)");
chart1.stroke("#ff4340");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 7////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-7");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.1171, 1.1241, 1.1162, 1.1321, 1.1171]);
// chart colours
chart1.fill("rgba(255,187,83,0.4)");
chart1.stroke("#ffbb53");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 8////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-8");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1, 1, 1, 1, 1]);
// chart colours
chart1.fill("rgba(36,214,131,0.4)");
chart1.stroke("#24d683");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 9////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-9");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1, 1, 1, 1, 1]);
// chart colours
chart1.fill("rgba(36,214,131,0.4)");
chart1.stroke("#24d683");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 10////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-10");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1, 1, 1, 1, 1]);
// chart colours
chart1.fill("rgba(36,214,131,0.4)");
chart1.stroke("#24d683");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 11////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-11");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1, 1, 1, 1, 1]);
// chart colours
chart1.fill("rgba(36,214,131,0.4)");
chart1.stroke("#24d683");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 12////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-12");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1, 1, 1, 1, 1]);
// chart colours
chart1.fill("rgba(36,214,131,0.4)");
chart1.stroke("#24d683");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 13////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-13");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1, 1, 1, 1, 1]);
// chart colours
chart1.fill("rgba(36,214,131,0.4)");
chart1.stroke("#24d683");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 14////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-14");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1, 1, 1, 1, 1]);
// chart colours
chart1.fill("rgba(36,214,131,0.4)");
chart1.stroke("#24d683");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 15////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-15");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0.5, 0.5, 0.5, 0.5, 0.5]);
// chart colours
chart1.fill("rgba(255,187,83,0.4)");
chart1.stroke("#ffbb53");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 16////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-16");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0.5, 0.5, 0.5, 0.5, 0.5]);
// chart colours
chart1.fill("rgba(255,187,83,0.4)");
chart1.stroke("#ffbb53");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 17////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-17");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0.5, 0.5, 0.5, 0.5, 0.5]);
// chart colours
chart1.fill("rgba(255,187,83,0.4)");
chart1.stroke("#ffbb53");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 18////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-18");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0.5, 0.5, 0.5, 0.5, 0.5]);
// chart colours
chart1.fill("rgba(255,187,83,0.4)");
chart1.stroke("#ffbb53");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 19////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-19");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0.5, 0.5, 0.5, 0.5, 0.5]);
// chart colours
chart1.fill("rgba(255,187,83,0.4)");
chart1.stroke("#ffbb53");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 20////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-20");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0.5, 0.5, 0.5, 0.5, 0.5]);
// chart colours
chart1.fill("rgba(255,187,83,0.4)");
chart1.stroke("#ffbb53");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 21////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-21");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0.5, 0.5, 0.5, 0.5, 0.5]);
// chart colours
chart1.fill("rgba(255,187,83,0.4)");
chart1.stroke("#ffbb53");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 22////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-22");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0, 0, 0, 0, 0]);
// chart colours
// chart colours
chart1.fill("rgba(255,67,64,0.4)");
chart1.stroke("#ff4340");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 23////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-23");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0, 0, 0, 0, 0]);
// chart colours
// chart colours
chart1.fill("rgba(255,67,64,0.4)");
chart1.stroke("#ff4340");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 24////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-24");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0, 0, 0, 0, 0]);
// chart colours
// chart colours
chart1.fill("rgba(255,67,64,0.4)");
chart1.stroke("#ff4340");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 25////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-25");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0, 0, 0, 0, 0]);
// chart colours
// chart colours
chart1.fill("rgba(255,67,64,0.4)");
chart1.stroke("#ff4340");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 26////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-26");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0, 0, 0, 0, 0]);
// chart colours
// chart colours
chart1.fill("rgba(255,67,64,0.4)");
chart1.stroke("#ff4340");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 27////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-27");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0, 0, 0, 0, 0]);
// chart colours
// chart colours
chart1.fill("rgba(255,67,64,0.4)");
chart1.stroke("#ff4340");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 28////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create("card-graph-28");
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0, 0, 0, 0, 0]);
// chart colours
// chart colours
chart1.fill("rgba(255,67,64,0.4)");
chart1.stroke("#ff4340");
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// scale
chart1.yScale().minimum(-0.5);
chart1.yScale().maximum(1.5);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
