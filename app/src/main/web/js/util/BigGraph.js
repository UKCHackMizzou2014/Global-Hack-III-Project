<html>
  <head>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
	    var data = new google.visualization.DataTable();
		data.addColumn('number', 'cost');
		data.addColumn('number', 'hour');
		

	    var MAX = 720;
		for (var i = 0; i < MAX; ++i) {
			data.addRow([i+1, Math.random()+Math.random()+Math.random()+Math.random()+Math.random()+Math.random()]);
		}


        var options = {
          title: ' Hour vs Cost comparison',
          hAxis: {title: 'Hour', minValue: 0, maxValue: 800},
          vAxis: {title: 'Cost ($)', minValue: 0, maxValue: 7},
          legend: 'none',
		  series: {
		//0: {},
		1: { type: 'number',

    calc: function (dt, row) {
        var number = dt.getValue(row, 2);
        var formatter = new google.visualization.NumberFormat({fractionDigits:2});
        return {
            v: number,
            f: formatter.formatValue(number)
        };
    }}
	}
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <div id="chart_div" style="width: 900px; height: 500px;"></div>
  </body>
</html>
