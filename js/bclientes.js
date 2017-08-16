el2=document.getElementById('cont-circle'); 
els2=el2.getElementsByTagName('div');
cli_total=els2.length;
anterior_banner="";


num_clientes=0;
$(".content_gallery:eq("+(5)+")" ).animate({ "opacity": "1", "margin-top": "5px",}, 700, "easeInOutQuart");

for(i=0; i<cli_total; i++)
{	
	if(i<5)
	{
		posi_circle= i*65;	
		$( ".element-circle:eq("+i+")").animate({"left": +posi_circle+"px", "top": "48px"}, 700, "easeInOutQuart");	
	}
	if(i>5)
	{
		posi_circle=150+(i*65);
		$( ".element-circle:eq("+i+")").animate({"left": +posi_circle+"px", "top": "48px"}, 700, "easeInOutQuart");	
	}
	if(i==5)
	{
		$( ".element-circle:eq("+i+")").animate({"left": "355px", "height": "150px", "width": "150px", "top": "0px"}, 700, "easeInOutQuart");	
	}	
	
}

$("#btn-prev").click(function(){							  
	sumar_clientes();	
});
$("#btn-next").click(function(){							  
	restar_clientes();							  
});


function sumar_clientes()
{	
	if(num_clientes==cli_total-1-5)
	{	
		
	}	
	else
	{
		for(i=0;i<cli_total;i++)
		{
			if(i<5+num_clientes+1)
			{
				posi_ani= (i-(num_clientes+1))*65;	
				$( ".element-circle:eq("+i+")").animate({"left": +posi_ani+"px", "top": "48px", "height": "55px", "width": "55px"}, 700, "easeInOutQuart");	
			}
			if(i>5+num_clientes+1)
			{
				posi_ani=150+((i-(num_clientes+1))*65);	
				$( ".element-circle:eq("+i+")").animate({"left": +posi_ani+"px", "top": "48px", "height": "55px", "width": "55px"}, 700, "easeInOutQuart");	
			}
			if(i==5+num_clientes+1)
			{
				$( ".element-circle:eq("+i+")").animate({"left": "355px", "height": "150px", "width": "150px", "top": "0px"}, 700, "easeInOutQuart");	
			}
		}
		
		$( ".content_gallery:eq("+(num_clientes+5)+")" ).animate({ "opacity": "0", "margin-top": "-800px",}, 700, "easeInOutQuart");
		$( ".content_gallery:eq("+(num_clientes+5+1)+")" ).animate({ "opacity": "1", "margin-top": "5px",}, 700, "easeInOutQuart");
		activar_banner(num_clientes+5+1);
		num_clientes++;
	}
	
}

function restar_clientes()
{
	if(num_clientes==-5)
	{	
		
	}	
	else
	{
		for(i=0;i<cli_total;i++)
		{
			if(i<5+num_clientes-1)
			{
				posi_ani= (i-(num_clientes-1))*65;	
				$( ".element-circle:eq("+i+")").animate({"left": +posi_ani+"px", "top": "48px", "height": "55px", "width": "55px"}, 700, "easeInOutQuart");	
			}
			if(i>5+num_clientes-1)
			{
				posi_ani=150+((i-(num_clientes-1))*65);	
				$( ".element-circle:eq("+i+")").animate({"left": +posi_ani+"px", "top": "48px", "height": "55px", "width": "55px"}, 700, "easeInOutQuart");	
			}
			if(i==5+num_clientes-1)
			{
				$( ".element-circle:eq("+i+")").animate({"left": "355px", "height": "150px", "width": "150px", "top": "0px"}, 700, "easeInOutQuart");	
			}
		}
		
		$( ".content_gallery:eq("+(num_clientes+5)+")" ).animate({ "opacity": "0", "margin-top": "-800px",}, 700);
		$( ".content_gallery:eq("+(num_clientes+5-1)+")" ).animate({ "opacity": "1", "margin-top": "5px",}, 700);
		activar_banner(num_clientes+5-1);
		num_clientes--;
	}
}/**/


/*contando clientess*/
	el2=document.getElementById('cont-circle'); 
	els2=el2.getElementsByTagName('div');	
	


var gal_elegido="#gallery-"+(5);
var gal = $(gal_elegido);
var galW = gal.width(); // 500
var slider = $(gal_elegido+' #slider');
var box = $('div', slider);
var boxN = box.length;  // 3
var c = 0; // a counter
var gallery_vDuration = 3000;

slider.width(galW*boxN);
galeria_inter = setInterval(gal_adelante, gallery_vDuration);

function activar_banner(num)
{
	
	gal_elegido="#gallery-"+(num);
	gal = $(gal_elegido);
	galW = gal.width(); // 500
	slider = $(gal_elegido+' #slider');
	box = $('div', slider);
	boxN = box.length;  // 3
	c = 0; // a counter
	slider.width(galW*boxN);
	clearInterval(galeria_inter);
	galeria_inter = setInterval(gal_adelante, gallery_vDuration);
}

/*comnetarios clientes*/
$(".area-clientes").mouseenter(function(){
									  $(".coment-cli").animate({ "opacity": "1"}, 500);
									  $(".coment-cli > div:eq("+(num_clientes+5)+")" ).css({ "visibility": "visible"});
									  //alert(num_clientes+5);
									  }).mouseleave(function(){
									   $(".coment-cli").animate({ "opacity": "0"}, 90);
									   $(".coment-cli > div:eq("+(num_clientes+5)+")" ).css({ "visibility": "hidden"});
									 });

/*-********************/



$('#next').click(function(){
	gal_adelante();
});
$('#prev').click(function(){
	gal_atras()
});


function gal_adelante()
{
	c++;
	c = c<0 ? boxN-1 : c%boxN;
	slider.stop().animate({ left: -c*galW },800);   
	
}
function gal_atras()
{
	c--;
	c = c<0 ? boxN-1 : c%boxN;
	slider.stop().animate({ left: -c*galW },800);   
	
}

/*banner contacto*/
cant_img_contact=0;
posi=0;
slider_contact=$("#content_img_contact");
var imagenes_contact = $('div', slider_contact);
cant_img_contact=imagenes_contact.length;		


function anima_banner_contact(){
	
	if(posi==(cant_img_contact-1))
	{		
		posi=0;
	}
	else
	{
		posi++;
	}
	
	$("#content_img_contact").animate({"top": (posi*170*(-1))}, 500);
	
}
intervalo_galeria_contact = setInterval(anima_banner_contact, 3000);