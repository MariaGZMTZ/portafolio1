function leer(){
	//referencia por pseudoclase
	var nombre=document.forms["formulario"].elements[0].value;
	//referencia por Id
	var clave=document.getElementById("pass").value;
	//referencia por TagName
	var car=document.getElementByTagName("select")[0].value;
	document.getElementById("datos").innerHTML="Nombre: "+nombre+ "\<br>Password: "+clave+ "\<br>Tu carrera es: "+car;
}