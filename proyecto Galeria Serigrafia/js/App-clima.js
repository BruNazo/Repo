

$("#buscar").on("click", function(){
	var busquedaProvincia = $("#busquedaProvincia").val();
	var busquedaCiudad = $("#busquedaCiudad").val();
	
	$.ajax({
		type: "get",
		url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+busquedaCiudad+"%2C%20"+busquedaProvincia+"%22)%20and%20u=%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
		success: function(data){
			var item = (data);			
			if (localStorage.getItem(data.query.results.channel.location.city+data.query.results.channel.location.country)) {
				alert("La ciudad ya esta entre sus tarjetas");
			}else{
				$("#tarjetasLocalStorage").append("<div class='col s12 l6'><div class='card-panel #ffffff white'><i class='borrarCiudad material-icons hoverable md-light md-inactive right' name="+data.query.results.channel.location.city+data.query.results.channel.location.country+" >delete</i><div class='row'> <div class='col s12 l12 '> <h4 class='blue-text align' id='ciudadPais'>"+ item.query.results.channel.location.city+", "+item.query.results.channel.location.country+"</h4> </div> <div class='col s12 l12 '> <h5 class='blue-text align' id='fecha'>"+ item.query.results.channel.item.pubDate+"</h5> </div> <div class='col s12 l12 '> <h6 class='blue-text align' id='estadoEnPalabras'>"+ item.query.results.channel.item.condition.text+"</h6> </div> <div class='col s12 l12 '> <div class='row'> <div> <div class='col s6 l6 valign-wrapper'> <h1 class='valign' id='iconoMasTemperatura'><img src='http://l.yimg.com/a/i/us/we/52/"+item.query.results.channel.item.condition.code+".gif' />"+item.query.results.channel.item.condition.temp+"<sup><font size=4>°C </font></sup><img> </h1> </div> <div class='col s6 l6'> <div> <div class='row s12 l12'> <span class='blue-text align' id='presion'> Pressure: "+ item.query.results.channel.atmosphere.pressure+" mb </span> </div> <div class='row s12 l12'> <span class='blue-text align' id='humedad'> Humidity: "+ item.query.results.channel.atmosphere.humidity+" % </span> </div> <div class='row s12 l12'> <span class='blue-text align' id='viento'> Wind: "+ item.query.results.channel.wind.speed+" km/h </span> </div> </div> </div> </div> </div> </div> <div class='col s12 l12 '> <div class='col s6 l6'> <div class='col s3 l3' id='dia1'> <img> </div> <div class='col s3 l3' id='dia2'> <img> </div> <div class='col s3 l3' id='dia3'> <img> </div> <div class='col s3 l3' id='dia4'> <img> </div> </div> <div class='col s6 l6'> <div class='col s3 l3' id='dia5'> <img> </div> <div class='col s3 l3' id='dia6'> <img> </div> <div class='col s3 l3' id='dia7'> <img> </div> <div class='col s3 l3' id='dia8'> <img> </div> </div> </div> </div> </div> </div>") 			}
				localStorage.setItem(data.query.results.channel.location.city+data.query.results.channel.location.country , JSON.stringify(item));
				alert('Si desea eliminar esta tarjeta recuerde actualizar la pagina.');			
			}
	}).error(function(){
		debugger;
	});
	
});	
$(document).ready(function(){
	for (var i in localStorage) {
		var tarjetaCiudad =JSON.parse(localStorage.getItem(i));
		$("#tarjetasLocalStorage").append("<div class='col s12 l6'>	<div class='card-panel #ffffff white '> <i class='borrarCiudad material-icons hoverable md-light md-inactive right' name="+i+" >delete</i><div class='row'> <div class='col s12 l12 '> <h4 class='blue-text align' id='ciudadPais'>"+ tarjetaCiudad.query.results.channel.location.city+", "+tarjetaCiudad.query.results.channel.location.country+"</h4> </div> <div class='col s12 l12 '> <h5 class='blue-text align' id='fecha'>"+ tarjetaCiudad.query.results.channel.item.pubDate+"</h5> </div> <div class='col s12 l12 '> <h6 class='blue-text align' id='estadoEnPalabras'>"+ tarjetaCiudad.query.results.channel.item.condition.text+"</h6> </div> <div class='col s12 l12 '> <div class='row'> <div> <div class='col s6 l6 valign-wrapper'> <h1 class='valign blue-text text-darken-4' id='iconoMasTemperatura'> <img src='http://l.yimg.com/a/i/us/we/52/"+tarjetaCiudad.query.results.channel.item.condition.code+".gif' /> "+tarjetaCiudad.query.results.channel.item.condition.temp+" <sup><font size=4>°C </font></sup> </h1> </div> <div class='col s6 l6'> <div> <div class='row s12 l12'> <span class='blue-text align' id='presion'>  Pressure: "+ tarjetaCiudad.query.results.channel.atmosphere.pressure+" mb </span> </div> <div class='row s12 l12'> <span class='blue-text align' id='humedad'> Humidity: "+ tarjetaCiudad.query.results.channel.atmosphere.humidity+" % </span> </div> <div class='row s12 l12'> <span class='blue-text align' id='viento'> Wind: "+ tarjetaCiudad.query.results.channel.wind.speed+" km/h </span> </div> </div> </div> </div> </div> </div> <div class='col s12 l12 '> <div class='col s6 l6'> <div class='col s3 l3' id='dia1'> <img> </div> <div class='col s3 l3' id='dia2'> <img> </div> <div class='col s3 l3' id='dia3'> <img> </div> <div class='col s3 l3' id='dia4'> <img> </div> </div> <div class='col s6 l6'> <div class='col s3 l3' id='dia5'> <img> </div> <div class='col s3 l3' id='dia6'> <img> </div> <div class='col s3 l3' id='dia7'> <img> </div> <div class='col s3 l3' id='dia8'> <img> </div> </div> </div> </div> </div> </div>") 
	};
}); 
