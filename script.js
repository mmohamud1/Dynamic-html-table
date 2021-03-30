var stage = anychart.graphics.create('card-graph-1');
  
// create charts
chart1 = anychart.sparkline();
chart2 = anychart.sparkline();

// setting the titles
chart1.title("EUR/USD");


// set series type
chart1.seriesType("area");
 

// create data for both charts
chart1.data([1.1171,1.1241,1.1262,1.1381,1.1471]);


// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);


// set container id for the charts
chart1.container(stage);


// initiate chart drawing
chart1.draw();

