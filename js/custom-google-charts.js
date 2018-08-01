console.log("custom google charts loaded");


google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Pressure', 80]
    // ['CPU', 55],
    // ['Network', 68]
  ]);

  var options = {
    width: 200, height: 200,

    greenFrom:40, greenTo: 75,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5,
    majorTicks: ["0","20","40", "60", "80", "100"]
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

  chart.draw(data, options);

  setInterval(function() {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 1000);
  // setInterval(function() {
  //   data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
  //   chart.draw(data, options);
  // }, 5000);
  // setInterval(function() {
  //   data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
  //   chart.draw(data, options);
  // }, 26000);
}
