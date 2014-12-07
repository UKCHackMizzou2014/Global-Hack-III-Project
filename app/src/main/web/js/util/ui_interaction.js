$(".selector").navbar({
	defaults: true
});

$(document).on("click","#b1",function(){
	$("p").css( "background-color", "blue" );
	$("code").html(JSON.stringify(tickle), null, "\t");
	
	
	//reset temps
	// 	    cool.weekend.6:00.temp.unit
	var num = Math.floor((Math.random() * 10) + 70);
	Tschedule.Daily[1].Steps[0].Cool.F = num;
	Tschedule.Daily[1].Steps[0].Cool.C = Math.floor((num-32)*5/9);
	console.log(num);
	//send new schedule
	Sensi.Thermostat.server.saveSchedule(Sensi.ICDID,
											Tschedule);
	//set new schedule to use
	Sensi.Thermostat.server.setScheduleActive(Sensi.ICDID,
								Tschedule.ObjectId);
	
	Sensi.Thermostat.server.setCool(Sensi.ICDID, num, 'F');
	
	
	
	console.log("gh: ");
	console.log(Tschedule);	//cool

});

//button2
$(document).on("click","#trial",function(){

	InfoSlideIn("Lorem ipsum dolor sit amet"+
	 "consectetur adipiscing elit, sed do eiusmod"+ 
	 "tempor incididunt ut labore et dolore magna"+ 
	 "aliqua.");
})

//submit a message to slide in
function InfoSlideIn(message)
{
	console.log(message);
	$('#infotext').text(message);
	$('#infopanel').panel("open");
}