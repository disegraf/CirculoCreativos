<?	
	$dest = "afosperu@hotmail.com";
	$dest2 = "afosperu@hotmail.com";
	$head = "From: ".$_POST['correo']."\r\n";
	
	$msg = "------------------------------------------------------ \n";
	$msg.= " MENSAJE DE LA PAGINA WEB CIRCULO DE LA CREATIVIDAD(trabaja con nosotros)\n";
	$msg.= "-------------------------------------------------------\n";
	$msg.= "NOMBRE:   ".$_POST['nombre']."\n";
	$msg.= "APELLIDO:  ".$_POST['apellido']."\n";
	$msg.= "CARGO AL QUE ASPIRA:  ".$_POST['cargo']."\n";
	$msg.= "CORREO:    ".$_POST['correo']."\n";
	$msg.= "TELÉFONO:  ".$_POST['telefono']."\n";
	$msg.= "HORA:     ".date("h:i:s a ")."\n";
	$msg.= "FECHA:    ".date("D, d M Y")."\n";
	$msg.= "------------------------------- \n\n";
	$msg.= $_POST['comentario']."\n\n";
	$msg.= "------------------------------- \n";
	$msg.= " Mensaje creado por fosperu.net \n";
	
	$prefijo1 = substr(md5(uniqid(rand())),0,6);	
	
	if(move_uploaded_file($_FILES["archivo"]["tmp_name"],"archivos/".$prefijo1."_". $_FILES["archivo"]["name"]))
	{
		$msg=$msg."\nArchivo Adjuntado: http://www.fosperu.net/circulo/mail/"."archivos/".$prefijo1."_". $_FILES["archivo"]["name"];	
	}
	else
	{
		$msg=$msg."\n NO SE ADJUNTO NINGÚN ARCHIVO";	
	}   
	
	if (mail($dest, "web circulo de la creatividad trabaja con nosotros", $head, $msg)&&mail($dest2, "web circulo de la creatividad", $head, $msg)) {
		echo "ok";
	} else {
		echo "error";
	};
	
?>