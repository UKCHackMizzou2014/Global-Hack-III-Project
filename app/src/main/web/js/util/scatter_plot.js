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
				}
			}
		}
	};

	var chart = new google.visualization.ScatterChart(document.getElementById('scatter_plot'));

	chart.draw(data, options);
}
