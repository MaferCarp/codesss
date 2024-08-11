if (pregunta.includes("capítulo")|| pregunta.includes("capitulo") ||pregunta.includes("episod") ||pregunta.includes("prime") ||pregunta.includes("transmis")  ||pregunta.includes("program") || pregunta.includes("reality") ||pregunta.includes("directo") ||pregunta.includes("gala") ||pregunta.includes("qu") && pregunta.includes("emp") ||pregunta.includes("qu") && pregunta.includes("com")) {(" Gala de eliminación + nueva participante (A.S.) comienza en..."+timer2  ) ;} 
                                                                                                                                                                   
  else if (pregunta.includes("elimin") ||pregunta.includes("gala") && pregunta.includes("elimin")) {("Gala de eliminación → Domingo  ") ;} 

else if (pregunta.includes("compe") || pregunta.includes("equipo")) {( "Competencia semanal → Martes. " );}
  
else if(pregunta.includes("nomina")  || pregunta.includes("votan")) {( " Gala de nominación → Miércoles. " );}
  
else if(pregunta.includes("salva") || pregunta.includes("prueba") && pregunta.includes("salva"))  {("Gala del Líder y Prueba de salvación → Jueves. " );}
  
else if(pregunta.includes("fiest") || pregunta.includes("bail")) {(" Espiando la casa: La fiesta → Viernes. " );}
else {}
