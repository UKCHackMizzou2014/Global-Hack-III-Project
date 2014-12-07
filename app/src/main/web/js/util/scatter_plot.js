google.setOnLoadCallback(drawChart);
function drawChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'cost');
	data.addColumn('number', 'hour');

$.getJSON( "data/rtp-one.json", function( jsons ) {
	$.each( jsons, function( i, vals ) {
		dati = new Date(vals.Time);
		data.addRow([dati.getHours(), parseInt(vals.Cost)]);
	
	});
	
	var options = {
		 title: ' Hour vs Cost comparison',
		 hAxis: {title: 'Hour', minValue: 0, maxValue: 24},
		 vAxis: {title: 'Cost ($)', minValue: 0, maxValue: 150},
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
				}
			}
		}
	};
	var chart = new google.visualization.ScatterChart(document.getElementById('scatter_plot'));

	chart.draw(data, options);

	
 });

	
}



var xyz=0;

var hours = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

start = new Date("2014-10-17 00:00:01");

google.setOnLoadCallback(drawChart3);
function drawChart3() {
	var data = google.visualization.arrayToDataTable([
		['Diameter', 'Age']
	]);
	Papa.parse("data/10-17-2014.csv", {
		download: true,
		step: function(results, handle) {
			/*dati = new Date(results.data[0][11]);
			console.log(results.data[0][11]);
			if(results.data[0][9]!="off"){ //its heating or cooling
				data.addRow([parseInt(dati-start),1]);
			}else{
				data.addRow([parseInt(dati-start),0]);
			}
			xyz++;*/
		},
		complete: function(results, file) {
			var options = {
				title: 'Age of sugar maples vs. trunk diameter, in inches',
				hAxis: {title: 'Datetime', minValue: 0, maxValue: 5000},
				vAxis: {title: 'On/Off', minValue: 0, maxValue: 2},
				legend: 'none',
				trendlines: { 0: {} }    // Draw a trendline for data series 0.
			};

			var chart = new google.visualization.ScatterChart(document.getElementById('emer_data'));

			chart.draw(data, options);
		}
	});
	
	

	
}








google.setOnLoadCallback(drawChart2);
function drawChart2() {
	var data = google.visualization.arrayToDataTable([
	  ['Label', 'Value'],
	  ['Memory', 80],
	  ['CPU', 55],
	  ['Network', 68]
	]);

	var options = {
	  width: 400, height: 120,
	  redFrom: 90, redTo: 100,
	  yellowFrom:75, yellowTo: 90,
	  minorTicks: 5
	};

	var chart = new google.visualization.Gauge(document.getElementById('guage_display'));

	chart.draw(data, options);

	setInterval(function() {
	  data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
	  chart.draw(data, options);
	}, 13000);
	setInterval(function() {
	  data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
	  chart.draw(data, options);
	}, 5000);
	setInterval(function() {
	  data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
	  chart.draw(data, options);
	}, 26000);
}