if (pregunta.includes("capítulo")||pregunta.includes("episodio") ||pregunta.includes("prime") ||pregunta.includes("transmisión")  ||pregunta.includes("programa") || pregunta.includes("reality") ||pregunta.includes("directo")) {(" Gala de eliminación + nueva participante comienza en..."+timer2  ) ;} 
                                                                                                                                                                   
  else if (pregunta.includes("eliminación") || pregunta.includes("elimin") || pregunta.includes("gala")) {("Gala de eliminación en → Domingo (cambio de día) ") ;} 

else if (pregunta.includes("competencia") || pregunta.includes("equipos")) {( "Competencia semanal → Martes. " );}
  
else if(pregunta.includes("nominación")  || pregunta.includes("votación") || pregunta.includes("nominan") || pregunta.includes("votan") || pregunta.includes("nomin")) {( " Gala de nominación → Miércoles. " );}
  
else if(pregunta.includes("salvación") || pregunta.includes("salvan"))  {("Gala del Líder y Prueba de salvación → Jueves. " );}
  
else if(pregunta.includes("fiesta") || pregunta.includes("baile")) {(" Espiando la casa: La fiesta → Viernes. " );}
else {}
