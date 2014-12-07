google.setOnLoadCallback(drawChart);
var hours= [];
function drawChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'cost');
	data.addColumn('number', 'hour');

$.getJSON( "data/rtp-one.json", function( jsons ) {
	$.each( jsons, function( i, vals ) {
		dati = new Date(vals.Time);
		data.addRow([dati.getHours(), parseInt(vals.Cost)]);
		hours[dati.getHours()]=parseInt(vals.Cost);
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