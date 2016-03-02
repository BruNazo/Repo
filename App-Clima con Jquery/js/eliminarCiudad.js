$(document).ready(function(){
	$(".borrarCiudad").on('click',function(){
		var tarjetaParaBorrar = $(this).attr('name');
		localStorage.removeItem(tarjetaParaBorrar);
		$(this).parent('.card-panel').remove();	
	});
});