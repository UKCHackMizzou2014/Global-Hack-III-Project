<html>
  <head>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(draw);
      function draw() {
		var index = 0;
		// 1 degree
        var data1 = google.visualization.arrayToDataTable([
        ['number', 'Nothing', 'Saving', 'Loss', 'Normal'
         , { role: 'annotation' } ],
        [1, 9, 3, 3, 12, ''],
        [2, 8, 2, 2, 10, ''],
		[3, 11, 4, 4, 15, ''],
		[4, 8, 2, 2, 10, ''],
		[5, 8, 4, 2, 10, ''],
		[6, 8, 2, 2, 10, ''],
		[7, 8, 4, 2, 10, ''],
		[8, 8, 2, 2, 10, ''],
		[9, 8, 2, 2, 10, ''],
		[10, 8, 4, 2, 10, ''],
		[11, 8, 2, 2, 10, ''],
		[12, 8, 2, 2, 10, ''],
		[13, 8, 4, 2, 10, ''],
		[14, 8, 2, 2, 10, '']
      ]);
		//2 degree
		var data2 = google.visualization.arrayToDataTable([
        ['number', 'Nothing', 'Saving', 'Loss', 'Normal'
         , { role: 'annotation' } ],
        [1, 9, 5, 5, 14, ''],
        [2, 8, 4, 4, 12, ''],
		[3, 11, 6, 6, 17, ''],
		[4, 8, 4, 4, 12, ''],
		[5, 8, 4, 4, 12, ''],
		[6, 8, 4, 4, 12, ''],
		[7, 8, 4, 4, 12, ''],
		[8, 8, 4, 4, 12, '']
      ]);
	// add data to array
	var data = [];
    data[0] = data1;
    data[1] = data2;
	//option for the graph
        var options = {
		tooltip: {
			isHtml: true,
			trigger: 'both'
		},
		title: '1 Degree Difference Graph',
        width: 900,
        height: 500,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '60%' },
        isStacked: true,
		seriesType: "bars",
		//colors: ['white', 'red', 'green', '#76A7FA'],
		series: {
		0: {color: 'transparent', visibleInLegend: false},
		1: {color: 'green', opacity: 0.1},
		2: {color: 'red', opacity: 0.1},
		3: {color: '#76A7FA', type: "line"},
		},
		lineWidth: 4,
        vAxis: {title: 'Cost ($)'},
		hAxis: {title: 'Hour', viewWindow: {min:0, max:8.5}},
		animation:{
        duration: 600,
        easing: 'out'
      }
      };
	  
		var current = 0;
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	var button = document.getElementById('b1');
	var prevButton = document.getElementById('prev');
    var nextButton = document.getElementById('next');
    var changeZoomButton = document.getElementById('zoom');
	var gotoMaxButton = document.getElementById('maxVal');

	function drawChart() {
      // Disabling the button while the chart is drawing.
	   button.disabled = true;   
	   prevButton.disabled = true;
      nextButton.disabled = true;
      changeZoomButton.disabled = true;
		gotoMaxButton.disabled = true;
	    google.visualization.events.addListener(chart, 'ready',
          function() {
			 prevButton.disabled = options.hAxis.viewWindow.min <= 0;
            nextButton.disabled = options.hAxis.viewWindow.max >= 24;
            changeZoomButton.disabled = false;
            button.disabled = false;
			gotoMaxButton.disabled = false;
          });
		  
      options['title'] = (current+1) + ' Degree Difference Graph';
	  chart.draw(data[current], options);
	  
	  }
	drawChart();
	//add listener to graph
    google.visualization.events.addListener(chart, 'select', chartselectHandler);

    function chartselectHandler() {
		console.log(chart.getSelection());
    }
	//action for switch button
	button.onclick = function() {
      current = 1 - current;
      drawChart();
    }
	//action for prev button
	  prevButton.onclick = function() {
      options.hAxis.viewWindow.min -= 1;
      options.hAxis.viewWindow.max -= 1;
      drawChart();
    }
	//action for next button
    nextButton.onclick = function() {
      options.hAxis.viewWindow.min += 1;
      options.hAxis.viewWindow.max += 1;
      drawChart();
    }
	
	//action for max button
    gotoMaxButton.onclick = function() {
	 if (zoomed) {zoomed = !zoomed;}
	 var maxVal = data[current].getColumnRange(2).max;
     gotoMax(maxVal);
    }
	
	function gotoMax(value) {
		console.log("last " + index);
		var rows = data[current].getNumberOfRows();
		for (var i = index; i < rows; ++i){
			 if (data[current].getValue(i, 2) == value) {
				index = (i+1)%(rows);
				options.hAxis.viewWindow.min = i - 4;
				options.hAxis.viewWindow.max = i + 4.5;
				drawChart();
			    //wait 1s before highlighting the column
				function getColumn(i) {
					chart.setSelection([{row:i,column:2}]);
				}
				setTimeout(getColumn(i), 900)
				break;
			}	
			//if at the end, update the value of index to 1
			if (i == (rows - 1)){
				index = (i+1)%(rows);
			}
		}
		
	}
	//action for zoom button
    var zoomed = false;
    changeZoomButton.onclick = function() {
      if (zoomed) {
        options.hAxis.viewWindow.min = 0;
        options.hAxis.viewWindow.max = 8.5;
      } else {
        options.hAxis.viewWindow.min = 0;
        options.hAxis.viewWindow.max = 24;
      }
      zoomed = !zoomed;
      drawChart();
    }

      }
    </script>
  </head>
  <body>
    <p><input type="submit" id="prev" value="Previous"/>
	<input type="submit" id="next" value="Next"/>
	<input type="submit" id="zoom" value="Zoom"/></p>
	<p><input type="submit" id="maxVal" value="Max Saving"/></p>
   	<p><input type="submit" id="b1" value="Switch Graph"/></p>
	
    <div id="chart_div" style="width: 900px; height: 500px;"></div>
  </body>
</html>
