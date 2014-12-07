$(document).on("click","#b1",function(){
	$("p").css( "background-color", "blue" );
	Sensi.Thermostat.server.setCool(Sensi.ICDID, 60, 'F');
	$("code").html(JSON.stringify(Tschedule), null, "\t");
	
	
	//reset temps
	// 	    cool.weekend.6:00.temp.unit
	var num = Math.floor((Math.random() * 10) + 70);
	Tschedule[0].Daily[1].Steps[0].Cool.F = num;
	Tschedule[0].Daily[1].Steps[0].Cool.C = Math.floor((num-32)*5/9);
	console.log(num);
	//send new schedule
	Sensi.Thermostat.server.saveSchedule(Sensi.ICDID,
											Tschedule[0]);
	//set new schedule to use
	Sensi.Thermostat.server.setScheduleActive(Sensi.ICDID,
								Tschedule[0].ObjectId);
	
	
	
	
	
	//Sensi.Thermostat.server.setCool(Sensi.ICDID, 60, 'F');
	
	
	
	console.log("gh: ");
	console.log(Tschedule);	//cool

});