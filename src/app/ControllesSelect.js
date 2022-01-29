


//creamos variableas array para cada nivel
var niv_Licenciatura=['Enfermeria','Software','Arquitectura'];
var niv_Maestria=['Fiscal','Educacion'];
var niv_Doctorado=['Comunicacion','Gastronoma'];



function cambia(){

 var dpt = document.getElementById('niv').value
if (dpt!=0) {
      	 espe=eval("niv_"+dpt)
      	 numespe = espe.length
      	 document.f1.esp.length = numespe
  conso.lelog(numespe);
      	 for(i=0;i<numespe;i++){
         	 document.f1.esp.options[i].value=espe[i]
         	 document.f1.esp.options[i].text=espe[i]
      	 }
   	    }else{
      	 document.f1.esp.length = 1
      	 document.f1.esp.options[0].value = " "
      	 document.f1.esp.options[0].text = "SIN ASIGNAR"
   	   }
   	}// FIN DE FUNCIONcambia


