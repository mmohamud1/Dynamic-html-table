//////////////////////////////////////////////////////////////GRAPH 1////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create('card-graph-1');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.1171,1.1241,1.1262,1.1381,1.1471]);
// chart colours
chart1.fill('rgba(36,214,131,0.7)')
chart1.stroke('#24d683')
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 2////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create('card-graph-2');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.1171,1.1241,1.1262,1.1221,1.1171]);
// chart colours
chart1.fill('rgba(255,187,83,0.7)')
chart1.stroke('#ffbb53')
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 3////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create('card-graph-3');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.1171,1.1241,1.1262,1.1381,1.1391]);
// chart colours
chart1.fill('rgba(36,214,131,0.7)')
chart1.stroke('#24d683')
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
// initiate chart drawing
chart1.draw();