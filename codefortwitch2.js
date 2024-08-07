if (pregunta.includes("capítulo")||pregunta.includes("episodio") ||pregunta.includes("prime") ||pregunta.includes("transmisión") || pregunta.includes("reality")) {(" Gala de nominación 23:00 Hs ");}
  else if (pregunta.includes("eliminación") || pregunta.includes("elimin") || pregunta.includes("gala")) {( usuario +" "+ "Gala de eliminación  (Domingo) " );}
else if (pregunta.includes("competencia") || pregunta.includes("equipos")) {( usuario + "Competencia semanal → Martes... " );}
else if(pregunta.includes("nominación")  || pregunta.includes("votación") || pregunta.includes("nominan") || pregunta.includes("votan") || pregunta.includes("nomin")) {( usuario + " Gala de nominación → Miércoles... " );}
else if(pregunta.includes("salvación") || pregunta.includes("salvan"))  {( usuario + " Prueba de salvación → Jueves... " );}
else if(pregunta.includes("fiesta") || pregunta.includes("baile")) {( usuario + " Espiando la casa: La fiesta → Viernes... " );}
else {}
