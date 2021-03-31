$.getJSON("data.json", function(json) {
    console.log(json)
    
});









































//////////////////////////////////////////////////////////////GRAPH 1////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create('card-graph-1');
 // Remove Watermark
 stage.credits().enabled(false);
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.1171,1.1241,1.1262,1.1381,1.1471]);
// chart colours
chart1.fill('rgba(36,214,131,0.4)')
chart1.stroke('#24d683')
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
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
chart1.fill('rgba(255,187,83,0.4)')
chart1.stroke('#ffbb53')
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
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
chart1.fill('rgba(36,214,131,0.4)')
chart1.stroke('#24d683')
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 4////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create('card-graph-4');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.3171,1.2741,1.2262,1.1781,1.1291]);
// chart colours
chart1.fill('rgba(255,67,64,0.4)')
chart1.stroke('#ff4340')
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 5////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create('card-graph-5');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.1171,1.1241,1.1262,1.1381,1.1471]);
// chart colours
chart1.fill('rgba(36,214,131,0.4)')
chart1.stroke('#24d683')
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 6////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create('card-graph-6');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.3171,1.3741,1.2262,1.1781,1.1291]);
// chart colours
chart1.fill('rgba(255,67,64,0.4)')
chart1.stroke('#ff4340')
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 7////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create('card-graph-7');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1.1171,1.1241,1.1162,1.1321,1.1171]);
// chart colours
chart1.fill('rgba(255,187,83,0.4)')
chart1.stroke('#ffbb53')
// set charts dimensions and postition
chart1.bounds(0, 0, 200, 50);
// set container id for the charts
chart1.container(stage);
chart1.background().fill("#F3F4F6");
// initiate chart drawing
chart1.draw();
//////////////////////////////////////////////////////////////GRAPH 8////////////////////////////////////////////////////////////////
var stage = anychart.graphics.create('card-graph-8');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1,1,1,1,1]);
// chart colours
chart1.fill('rgba(36,214,131,0.4)')
chart1.stroke('#24d683')
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
var stage = anychart.graphics.create('card-graph-9');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1,1,1,1,1]);
// chart colours
chart1.fill('rgba(36,214,131,0.4)')
chart1.stroke('#24d683')
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
var stage = anychart.graphics.create('card-graph-10');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1,1,1,1,1]);
// chart colours
chart1.fill('rgba(36,214,131,0.4)')
chart1.stroke('#24d683')
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
var stage = anychart.graphics.create('card-graph-11');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1,1,1,1,1]);
// chart colours
chart1.fill('rgba(36,214,131,0.4)')
chart1.stroke('#24d683')
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
var stage = anychart.graphics.create('card-graph-12');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1,1,1,1,1]);
// chart colours
chart1.fill('rgba(36,214,131,0.4)')
chart1.stroke('#24d683')
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
var stage = anychart.graphics.create('card-graph-13');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1,1,1,1,1]);
// chart colours
chart1.fill('rgba(36,214,131,0.4)')
chart1.stroke('#24d683')
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
var stage = anychart.graphics.create('card-graph-14');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([1,1,1,1,1]);
// chart colours
chart1.fill('rgba(36,214,131,0.4)')
chart1.stroke('#24d683')
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
var stage = anychart.graphics.create('card-graph-15');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([.5,.5,.5,.5,.5]);
// chart colours
chart1.fill('rgba(255,187,83,0.4)')
chart1.stroke('#ffbb53')
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
var stage = anychart.graphics.create('card-graph-16');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([.5,.5,.5,.5,.5]);
// chart colours
chart1.fill('rgba(255,187,83,0.4)')
chart1.stroke('#ffbb53')
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
var stage = anychart.graphics.create('card-graph-17');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([.5,.5,.5,.5,.5]);
// chart colours
chart1.fill('rgba(255,187,83,0.4)')
chart1.stroke('#ffbb53')
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
var stage = anychart.graphics.create('card-graph-18');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([.5,.5,.5,.5,.5]);
// chart colours
chart1.fill('rgba(255,187,83,0.4)')
chart1.stroke('#ffbb53')
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
var stage = anychart.graphics.create('card-graph-19');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([.5,.5,.5,.5,.5]);
// chart colours
chart1.fill('rgba(255,187,83,0.4)')
chart1.stroke('#ffbb53')
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
var stage = anychart.graphics.create('card-graph-20');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([.5,.5,.5,.5,.5]);
// chart colours
chart1.fill('rgba(255,187,83,0.4)')
chart1.stroke('#ffbb53')
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
var stage = anychart.graphics.create('card-graph-21');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([.5,.5,.5,.5,.5]);
// chart colours
chart1.fill('rgba(255,187,83,0.4)')
chart1.stroke('#ffbb53')
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
var stage = anychart.graphics.create('card-graph-22');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0,0,0,0,0]);
// chart colours
// chart colours
chart1.fill('rgba(255,67,64,0.4)')
chart1.stroke('#ff4340')
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
var stage = anychart.graphics.create('card-graph-23');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0,0,0,0,0]);
// chart colours
// chart colours
chart1.fill('rgba(255,67,64,0.4)')
chart1.stroke('#ff4340')
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
var stage = anychart.graphics.create('card-graph-24');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0,0,0,0,0]);
// chart colours
// chart colours
chart1.fill('rgba(255,67,64,0.4)')
chart1.stroke('#ff4340')
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
var stage = anychart.graphics.create('card-graph-25');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0,0,0,0,0]);
// chart colours
// chart colours
chart1.fill('rgba(255,67,64,0.4)')
chart1.stroke('#ff4340')
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
var stage = anychart.graphics.create('card-graph-26');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0,0,0,0,0]);
// chart colours
// chart colours
chart1.fill('rgba(255,67,64,0.4)')
chart1.stroke('#ff4340')
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
var stage = anychart.graphics.create('card-graph-27');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0,0,0,0,0]);
// chart colours
// chart colours
chart1.fill('rgba(255,67,64,0.4)')
chart1.stroke('#ff4340')
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
var stage = anychart.graphics.create('card-graph-28');
// create charts
chart1 = anychart.sparkline();
// setting the titles
chart1.title("EUR/USD");
// set series type
chart1.seriesType("area");
// create data for both charts
chart1.data([0,0,0,0,0]);
// chart colours
// chart colours
chart1.fill('rgba(255,67,64,0.4)')
chart1.stroke('#ff4340')
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