//mycanvas color
(function() {
  var line1 = new TimeSeries();
  var line2 = new TimeSeries();
  setInterval(function() {
    line1.append(new Date().getTime(), Math.random());
    line2.append(new Date().getTime(), Math.random());
  }, 1000);

  var smoothie = new SmoothieChart({
      grid: { strokeStyle: 'rgb(125, 0, 0)', fillStyle: 'rgb(60, 0, 0)', lineWidth: 1, millisPerLine: 250, verticalSections: 6 },
      labels: { fillStyle:'rgb(255, 255, 0)' },
      tooltip :true,
  });
  // smoothie.addTimeSeries(line1, { strokeStyle: 'rgb(0, 255, 0)', fillStyle: 'rgba(0, 255, 0, 0.4)', lineWidth: 3 });
  // smoothie.addTimeSeries(line2, { strokeStyle: 'rgb(255, 0, 255)', fillStyle: 'rgba(255, 0, 255, 0.3)', lineWidth: 3 });
  smoothie.addTimeSeries(line1);
  smoothie.addTimeSeries(line2);
  smoothie.streamTo(document.getElementById("mycanvas-color"), 1000);
})();

//mycanvas test color
(function() {
  var line1 = new TimeSeries();
  var line2 = new TimeSeries();
  setInterval(function() {
    line1.append(new Date().getTime(), Math.random());
    line2.append(new Date().getTime(), Math.random());
  }, 1000);

  var smoothie = new SmoothieChart({
      grid: { strokeStyle: 'rgba(0, 0, 0, 0)', fillStyle: 'rgb(206, 20, 113)', lineWidth: 1, millisPerLine: 250, verticalSections: 6 },
      labels: { fillStyle:'rgb(255, 255, 0)' },
      tooltip :true,
  });
  smoothie.addTimeSeries(line1, { strokeStyle: 'rgb(255, 255, 255)', fillStyle: 'rgba(255, 255, 255, 0.4)', lineWidth: 3 });
  smoothie.addTimeSeries(line2, { strokeStyle: 'rgb(255, 0, 255)', fillStyle: 'rgba(255, 0, 255, 0.3)', lineWidth: 3 });
  // smoothie.addTimeSeries(line1);
  // smoothie.addTimeSeries(line2);
  smoothie.streamTo(document.getElementById("mycanvas-test-color"), 1000);
})();

//mycanvas test single
(function() {
  var line1 = new TimeSeries();
  // var line2 = new TimeSeries();
  setInterval(function() {
    line1.append(new Date().getTime(), Math.random());
  }, 1000);

  var smoothie = new SmoothieChart({
      // grid: { strokeStyle: 'rgb(125, 0, 0)', fillStyle: 'rgb(60, 0, 0)', lineWidth: 1, millisPerLine: 250, verticalSections: 6 },
      grid: { strokeStyle: 'rgb(255, 255, 255)', fillStyle: 'rgb(66, 134, 244)', lineWidth: 0.5, millisPerLine: 250, verticalSections: 12 },
      labels: { fillStyle:'rgb(255, 255, 0)' },
      tooltip :true,
  });
  smoothie.addTimeSeries(line1, { strokeStyle: 'rgb(255, 255, 255)', fillStyle: 'rgba(255, 255, 255, 0.4)', lineWidth: 3 });
  smoothie.streamTo(document.getElementById("mycanvas-single"), 1000);
})();
