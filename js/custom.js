 
$(document).ready(function() {
	
	$('#loader').hide();
	$('#giro_3d').roundabout();

	/*contando pagina*/
	el=document.getElementById('contenidos'); 
	els=el.getElementsByTagName('li'); 
	vec=[] 
	for(i=0;i<els.length;i++){ 
		if(els[i].parentNode==el)
		{
			vec.push(els[i].getAttribute("id"));	
		}
	}
	
	<!--desapareciendo-->
	for(j=0;j<vec.length;j++){
		termino="#"+vec[j];
		$(termino).hide();
	}	
	<!--fin de desapareciendo-->
		
	iniciando_hash();
	
	/*coto e informacion de los creativos*/	
	
	/*********************************creativo 1************************/
	$("#crea-1").mouseover(function(){
									$("#crea-1").css({ "background-position": "0 -125px"})									
									$("#cont_quienessomos").stop().animate({ "opacity": "1", "top": "170px", "left": "125px" }, 900, "easeOutQuad");
									$('#txt_qs_1').css({ "visibility": "visible"});	
									;})
				.mouseout(function(){
								   $("#crea-1").css({ "background-position": "0 0"});
								   $("#cont_quienessomos").stop().animate({ "opacity": "0", "top": "-200px", "left": "350px" }, 500,"easeInQuad");
								   $('#txt_qs_1').css({ "visibility": "hidden"});	
								   })
	
	/*********************************creativo 2************************/
	$("#crea-2").mouseover(function(){
									$("#crea-2").css({ "background-position": "0 -125px"})									
									$("#cont_quienessomos").stop().animate({ "opacity": "1", "top": "170px", "left": "260px" }, 900, "easeOutQuad");
									$('#txt_qs_2').css({ "visibility": "visible"});	
									;})
				.mouseout(function(){
								   $("#crea-2").css({ "background-position": "0 0"});
								   $("#cont_quienessomos").stop().animate({ "opacity": "0", "top": "-200px", "left": "350px" }, 500,"easeInQuad");
								   $('#txt_qs_2').css({ "visibility": "hidden"});
								   })
	
	/*********************************creativo 3************************/
	$("#crea-3").mouseover(function(){
									$("#crea-3").css({ "background-position": "0 -125px"})									
									$("#cont_quienessomos").stop().animate({ "opacity": "1", "top": "170px", "left": "395px" }, 900, "easeOutQuad");
									$('#txt_qs_3').css({ "visibility": "visible"});	
									;})
				.mouseout(function(){
								   $("#crea-3").css({ "background-position": "0 0"});
								   $("#cont_quienessomos").stop().animate({ "opacity": "0", "top": "-200px", "left": "350px" }, 500,"easeInQuad");
								   $('#txt_qs_3').css({ "visibility": "hidden"});
								   })
				
	/*********************************creativo 4************************/			
	$("#crea-4").mouseover(function(){
									$("#crea-4").css({ "background-position": "0 -125px"})									
									$("#cont_quienessomos").stop().animate({ "opacity": "1", "top": "170px", "left": "530px" }, 900, "easeOutQuad");
									$('#txt_qs_4').css({ "visibility": "visible"});	
									;})
				.mouseout(function(){
								   $("#crea-4").css({ "background-position": "0 0"});
								   $("#cont_quienessomos").stop().animate({ "opacity": "0", "top": "-200px", "left": "350px" }, 500,"easeInQuad");
								   $('#txt_qs_4').css({ "visibility": "hidden"});
								   })
				
	/*********************************creativo 5************************/
	$("#crea-5").mouseover(function(){
									$("#crea-5").css({ "background-position": "0 -125px"})									
									$("#cont_quienessomos").stop().animate({ "opacity": "1", "top": "170px", "left": "210px" }, 900, "easeOutQuad");
									$('#txt_qs_5').css({ "visibility": "visible"});	
									;})
				.mouseout(function(){
								   $("#crea-5").css({ "background-position": "0 0"});
								   $("#cont_quienessomos").stop().animate({ "opacity": "0", "top": "-200px", "left": "350px" }, 500,"easeInQuad");
								   $('#txt_qs_5').css({ "visibility": "hidden"});
								   })	
				
	/*********************************creativo 6************************/
	$("#crea-6").mouseover(function(){
									$("#crea-6").css({ "background-position": "0 -125px"})									
									$("#cont_quienessomos").stop().animate({ "opacity": "1", "top": "170px", "left": "345px" }, 900, "easeOutQuad");
									$('#txt_qs_6').css({ "visibility": "visible"});	
									;})
				.mouseout(function(){
								   $("#crea-6").css({ "background-position": "0 0"});
								   $("#cont_quienessomos").stop().animate({ "opacity": "0", "top": "-200px", "left": "350px" }, 500,"easeInQuad");
								   $('#txt_qs_6').css({ "visibility": "hidden"});
								   })	
				
	/*********************************creativo 7************************/
	$("#crea-7").mouseover(function(){
									$("#crea-7").css({ "background-position": "0 -125px"})									
									$("#cont_quienessomos").stop().animate({ "opacity": "1", "top": "250px", "left": "190px" }, 900, "easeOutQuad");
									$('#txt_qs_7').css({ "visibility": "visible"});	
									;})
				.mouseout(function(){
								   $("#crea-7").css({ "background-position": "0 0"});
								   $("#cont_quienessomos").stop().animate({ "opacity": "0", "top": "-200px", "left": "350px" }, 500,"easeInQuad");
								   $('#txt_qs_7').css({ "visibility": "hidden"});
								   })
				
	/*********************************creativo 8************************/
	$("#crea-8").mouseover(function(){
									$("#crea-8").css({ "background-position": "0 -125px"})									
									$("#cont_quienessomos").stop().animate({ "opacity": "1", "top": "250px", "left": "325px" }, 900, "easeOutQuad");
									$('#txt_qs_8').css({ "visibility": "visible"});	
									;})
				.mouseout(function(){
								   $("#crea-8").css({ "background-position": "0 0"});
								   $("#cont_quienessomos").stop().animate({ "opacity": "0", "top": "-200px", "left": "350px" }, 500,"easeInQuad");
								   $('#txt_qs_8').css({ "visibility": "hidden"});
								   })	
				
	/*********************************creativo 9************************/
	$("#crea-9").mouseover(function(){
									$("#crea-9").css({ "background-position": "0 -125px"})									
									$("#cont_quienessomos").stop().animate({ "opacity": "1", "top": "250px", "left": "460px" }, 900, "easeOutQuad");
									$('#txt_qs_9').css({ "visibility": "visible"});	
									;})
				.mouseout(function(){
								   $("#crea-9").css({ "background-position": "0 0"});
								   $("#cont_quienessomos").stop().animate({ "opacity": "0", "top": "-200px", "left": "350px" }, 500,"easeInQuad");
								   $('#txt_qs_9').css({ "visibility": "hidden"});
								   })	
				
	/*********************************creativo 10************************/
	$("#crea-10").mouseover(function(){
									$("#crea-10").css({ "background-position": "0 -125px"})									
									$("#cont_quienessomos").stop().animate({ "opacity": "1", "top": "250px", "left": "140px" }, 900, "easeOutQuad");
									$('#txt_qs_10').css({ "visibility": "visible"});	
									;})
				.mouseout(function(){
								   $("#crea-10").css({ "background-position": "0 0"});
								   $("#cont_quienessomos").stop().animate({ "opacity": "0", "top": "-200px", "left": "350px" }, 500,"easeInQuad");
								   $('#txt_qs_10').css({ "visibility": "hidden"});
								   })	

	/*********************************creativo 11************************/
	$("#crea-11").mouseover(function(){
									$("#crea-11").css({ "background-position": "0 -125px"})									
									$("#cont_quienessomos").stop().animate({ "opacity": "1", "top": "250px", "left": "275px" }, 900, "easeOutQuad");
									$('#txt_qs_11').css({ "visibility": "visible"});	
									;})
				.mouseout(function(){
								   $("#crea-11").css({ "background-position": "0 0"});
								   $("#cont_quienessomos").stop().animate({ "opacity": "0", "top": "-200px", "left": "350px" }, 500,"easeInQuad");
								   $('#txt_qs_11').css({ "visibility": "hidden"});
								   })	

	/*********************que hacemos**************************************/
	
	$(".asesoria_grafica_img").mouseenter(function(){
													$("#txt1").animate({ "opacity": "1"}, 500);							 
													 }).mouseleave(function(){
													$("#txt1").animate({ "opacity": "0"}, 90);
													});
	$(".estrategia_creativa_img").mouseenter(function(){
													 $("#txt2").animate({ "opacity": "1"}, 500);							 
													 }).mouseleave(function(){
													$("#txt2").animate({ "opacity": "0"}, 90);
													});
	$(".comunicacio_integral_img").mouseenter(function(){
													 $("#txt3").animate({ "opacity": "1"}, 500);							 
													 }).mouseleave(function(){
													$("#txt3").animate({ "opacity": "0"}, 90);
													});
	$(".diseno_eventos_img").mouseenter(function(){
													 $("#txt4").animate({ "opacity": "1"}, 500);							 
													 }).mouseleave(function(){
													$("#txt4").animate({ "opacity": "0"}, 90);
													});
	
	/**********************************************************************/
	
	
	
	/*contactar*/
	
	$('.btn_enviar').click(function(){
									
									valida2();
									
									});
	
	/*******************/
	/*contactar2*/
	$("#trabaja-con-nosotros").click(function(){
										$('#bg-black').css({ "visibility": "visible"});
										});
	
	$(".salida-form").click(function(){										
										$('#bg-black').css({ "visibility": "hidden"});										
									 });
	/*-********************/
	
	
});

function valida1(){
	
	var filtro1 = /^([a-z ñáéíóú]{2,60})$/i;
	var filtro2= /^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+\.[A-Za-z0-9_.]+[A-za-z]$/;
		
	
	$(".loader-form2").css({ "visibility": "visible"});
	/**/if(!filtro1.test(document.form2.nombre.value))
	{
		alert("Escriba Correctamente su nombre");
		document.form2.nombre.focus();
		return false;
	}
	
	if(!filtro1.test(document.form2.apellido.value))
	{
		alert("Escriba Correctamente su apellido");
		document.form2.apellido.focus();
		return false;
	}	
	
	if(document.form2.nombre.value=="")
	{	
		alert("debe colocar un nombre");
		document.form2.nombre.focus();
		return false;
	}
	
	if(document.form2.apellido.value=="")
	{	
		alert("debe colocar un nombre");
		document.form2.apellido.focus();
		return false;
	}
	
	if(document.form2.cargo.value=="")
	{	
		alert("debe colocar un Cargo");
		document.form2.cargo.focus();
		return false;
	}
	
	if(document.form2.correo.value=="")
	{	
		alert("debe colocar una dirección de correo");
		document.form2.correo.focus();
		return false;
	}
	
	if(!filtro2.test(document.form2.correo.value))
	{
		alert("debe escribir correctamente su dirección de correo");
		document.form2.correo.focus();
		return false;
	}
	if(isNaN(document.form2.telefono.value))
	{
		alert("Escriba correctamente su numero de telefono");
		document.form2.telefono.focus();
		return false
	}
	$(".formulario-trabaja").hide();
	$.post('mail/mail.php',{
		   nombre:document.form2.nombre.value,
		   apellido:document.form2.apellido.value,
		   cargo:document.form2.cargo.value,
		   correo:document.form2.correo.value,
		   telefono:document.form2.telefono.value,
		   comentario:document.form2.comentario.value}
		   );
	
	
	var inputFileImage = document.getElementById("portafolio");
	var file = inputFileImage.files[0];
	var data = new FormData();	
	data.append('archivo',file);
	data.append('nombre',document.form2.nombre.value);
	data.append('apellido',document.form2.apellido.value);
	data.append('cargo',document.form2.cargo.value);
	data.append('correo',document.form2.correo.value);
	data.append('telefono',document.form2.telefono.value);
	data.append('comentario',document.form2.comentario.value);
	
	
	var url = "mail/mail.php";
	 $.ajax({
				url:url,
				type:'POST',
				contentType:false,				
				data:data,
				processData:false,  
				cache:false,
				success: function(respuesta){
					
					if(respuesta=="ok")	
					{
						alert ("Sus datos fueron enviados correctamente, Gracias");
					}
					if(respuesta=="error")	
					{
						alert ("No se pudo enviar los datos, Por favor inténtelo denuevo");
					}
						$(".formulario-trabaja").show();
						$(".loader-form2").css({ "visibility": "hidden"});
				
				}
		});
	
}

function valida2(){
	
	var filtro2= /^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+\.[A-Za-z0-9_.]+[A-za-z]$/;
	
	if(document.form1.nombre.value=="")
	{
		alert("Escriba Correctamente su nombre");
		document.form1.nombre.focus();
		return false;
	}	
	if(document.form1.asunto.value==""){
		alert("Llene todos los campos correctamente");
		document.form1.asunto.focus();
		return false;
	}	
	if(document.form1.mail.value==""){
		alert("debe colocar un correo");
		document.form1.mail.focus();
		return false;
	}	
	if(!filtro2.test(document.form1.mail.value))
	{
		alert("debe escribir correctamente su dirección de correo");
		document.form1.mail.focus();
		return false;
	}
	if(document.form1.mensaje.value==""){
		alert("Debe escribir un mensaje");
		document.form1.mensaje.focus();
		return false;
	}
	
	$(".form_contacto form").hide();
	$(".loader-form1").css({ "visibility": "visible"});
}




function iniciando_hash()
{		

	
	dhtmlHistory.initialize();	
	dhtmlHistory.addListener(myHistoryListener);
	var hash = dhtmlHistory.getCurrentLocation();	
	 
	if(!hash){
		hash='inicio';
		location.href='#inicio';
	};

	if (hash) {
		myHistoryListener(hash);
	}; 	 
	 
}

function myHistoryListener(hash) {				
			
			entrar(hash);		
}


dhtmlHistory.create({
            toJSON: function(o) {
                    return JSON.stringify(o);
            }
            , fromJSON: function(s) {
                    return JSON.parse(s);
            }
        });

anterior="";
function entrar(elegido)
{	
	salir(anterior);
	$("#"+elegido).show();
	
	if(elegido!="inicio")
	{
	
		 $("#"+elegido).find("#fanima").animate({ "margin-top": "-120px","margin-left": "-100", "opacity": "1"}, 700, "easeOutQuart" );	
		 $("#"+elegido).find("#fleanima").animate({ "margin-top": "0px", "opacity": "1"}, 1000, "easeInOutElastic");
		 $("#"+elegido).find("#titulos").animate({ "height": "50px", "width": "350px"}, 900);
		 if(elegido=="quienessomos")
		{
			  $("#"+elegido).find("#fanima").hide();
		}
		if(elegido=="quesomos")
		{
			$("#txt_quesomos1").animate({ "margin-left": "-370px", "opacity": "1"}, 1000 );
			$("#txt_quesomos2").animate({ "margin-top": "20px", "opacity": "1"}, 950 ); 
		}
		if(elegido=="quehacemos")
		{
			$(".asesoria_grafica_img").animate({ "margin-left": "-456px", "margin-top": "0px", "opacity": "1"}, 1000 );
			$(".estrategia_creativa_img").animate({ "margin-left": "-334px", "margin-top": "-21px", "opacity": "1"}, 1500 );
			$(".comunicacio_integral_img").animate({ "margin-left": "300px", "margin-top": "0px", "opacity": "1"}, 1000 );
			$(".diseno_eventos_img").animate({ "margin-left": "180px", "margin-top": "-40px", "opacity": "1"}, 1400 );
			
			$(".asesoria_grafica_nombre").animate({ "margin-top": "-70px"}, 1000 );
			$(".estrategia_creativa_nombre").animate({ "margin-top": "-50px"}, 1500 );
			$(".comunicacio_integral_nombre").animate({ "margin-top": "-70px"}, 1000 );
			$(".diseno_eventos_nombre").animate({ "margin-top": "-80px"}, 1500 );
		}
		if(elegido=="dondeestamos")
		{
			$(".mensaje").hide();
			$(".form_contacto").animate({ "margin-left": "-380px"}, 1500, "easeInOutElastic");
			$(".btn_enviar").animate({ "margin-left": "-200px"}, 1000 );			
			$(".banner_contacto").animate({ "top": "310px"}, 1500 );
		}
		 
	}
	else
	{		
		$("#inicio").animate({ "opacity": "1"}, 100 );
	}
	anterior=elegido;
}
function salir(anterior)
{

	//$("#"+anterior).hide();
	if(anterior!="inicio")
	{
		$("#"+anterior).find("#fanima").animate({ "margin-top": "0px","margin-left": "-140", "opacity": "0"}, 1000 );
		$("#"+anterior).find("#fleanima").animate({ "margin-top": "-600px", "opacity": "0"}, 100 );
		$("#"+anterior).find("#titulos").animate({ "height": "0px", "width": "0px"}, 900);
		if(anterior=="quienessomos")
		{
			$("#"+anterior).find("#fanima").show();
		}
		if(anterior=="quesomos")
		{
			$("#txt_quesomos1").animate({ "margin-left": "-800px", "opacity": "0"}, 1000 );
			$("#txt_quesomos2").animate({ "margin-top": "-800px", "opacity": "0"}, 1000 ); 
		}
		if(anterior=="quehacemos")
		{
			$(".asesoria_grafica_img").animate({ "margin-left": "0px", "margin-top": "20px"}, 1000 );
			$(".estrategia_creativa_img").animate({ "margin-left": "0px", "margin-top": "-20px"}, 1500 );
			$(".comunicacio_integral_img").animate({ "margin-left": "0px", "margin-top": "20px"}, 1000 );
			$(".diseno_eventos_img").animate({ "margin-left": "0px", "margin-top": "-20px"}, 1400 );
			
			$(".asesoria_grafica_nombre").animate({ "margin-top": "-800px"}, 1000 );
			$(".estrategia_creativa_nombre").animate({ "margin-top": "-800px"}, 1500 );
			$(".comunicacio_integral_nombre").animate({ "margin-top": "-800px"}, 1000 );
			$(".diseno_eventos_nombre").animate({ "margin-top": "-800px"}, 1500 );
		}
		if(anterior=="dondeestamos")
		{
			$(".mensaje").hide();
			$(".form_contacto").animate({ "margin-left": "-800px"}, 500 );
			$(".btn_enviar").animate({ "margin-left": "-800px"}, 500 );			
			$(".banner_contacto").animate({ "top": "-600px"}, 500 );
		}
	}
	else
	{		
		$("#"+anterior).animate({ "opacity": "0"}, 100 );		
	}
	$("#"+anterior).hide();

}

