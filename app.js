import {resultadosandroid, resultadoskaon, resultadosuniversal1, resultadosuniversal2,strings} from "./codigos.js";
import {MARCAS} from"./marcas.js";

const infoand = document.querySelector('#infoand');

infoand.addEventListener('click', ()=>{
   window.open('https://ayuda.tigo.com.co/hc/es/articles/360000125228--C%C3%B3mo-configurar-mi-control-Universal-Tigo-Hogar');
})

const refresh = document.getElementById('actualizar');

refresh.addEventListener('click',()=>{
      window.location.reload();
});



const div = document.querySelector("#tipo");

 div.addEventListener('click',(e)=>{


  

   const codigos = document.getElementById("marcas").value;
   const value = e.target;
   const tipo = value.closest(".btns").value;
   
    
   console.log(codigos); 


//validar campos vacios //

if (codigos === '' && tipo === ''  || codigos ==='' && tipo ==='android' || codigos === '' && tipo === 'kaon' 
|| codigos ==='' && tipo ==='universal1' || codigos === '' && tipo === 'kaon2' || codigos === '' && tipo === 'universal2')
   {
    toString(Swal.fire({
      width: '300px',
      icon:'info',
      title:'ingrese la marca del televisor',
      timer:60000,
      allowOutsideClick: false,
      color:"black",
      
      
      }));
 return false;
   };

   if(codigos==="select"){
      toString(swal.fire({
         width:"300px",
         icon:"error",
         title:"seleccione primero MARCA DEL TV",
         timer:60000,
         allowOutsideClick: false,
         color:"black",
       }))
       return false
   }
    
   //validar campos diferentes// 

    let exist = MARCAS.find((e) => e == codigos)

    if (!exist) {
       toString(swal.fire({
         width:"300px",
         icon:"error",
         title:"marca,no encontrada o puede estar mal escrita",
       }))
       return false
    } 

    else{

      
    
      
// condicion android //  

   if(codigos === 'hp' && tipo === 'android'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos android para televisores hp',
         text:`${resultadosandroid.hpA}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         })); 
    
      return false;
   }
   
// condicion kaon //  

   else if(codigos === 'hp' && tipo === 'kaon'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         title:'codigos hp para kaon no encontrados',
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }

   // condicion kaon2 //  

   else if(codigos === 'hp' && tipo === 'kaon2'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         title:'codigos hp para kaon2 no encontrados',
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }
   
   // condicion universal1 //

   else if(codigos === 'hp' && tipo === 'universal1'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         title:'codigos hp para universal1 no encontrados',
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

      // condicion universal2 //

   else if(codigos === 'hp' && tipo === 'universal2'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         title:'codigos hp para universal2 no encontrados',
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

     // condicion android //  

   if(codigos === 'lg' && tipo === 'android'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos android para televisores lg',
         text:`${resultadosandroid.lgA}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         })); 
    
      return false;
   }
   
// condicion kaon //  

   else if(codigos === 'lg' && tipo === 'kaon'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos kaon para televisores lg',
         text:`${resultadoskaon.lgK}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }

   // condicion kaon2 //  

   else if(codigos === 'lg' && tipo === 'kaon2'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos kaon2 para televisores lg',
         text:`${resultadoskaon.lgK}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }
   
   // condicion universal1 //

   else if(codigos === 'lg' && tipo === 'universal1'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos universal1 para televisores lg',
         text:`${resultadosuniversal1.lgU}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

      // condicion universal2 //

   else if(codigos === 'lg' && tipo === 'universal2'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos universal2 para televisores lg',
         text:`${resultadosuniversal2.lgU}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

     // condicion android //  

   if(codigos === 'sony' && tipo === 'android'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos android para televisores sony',
         text:`${resultadosandroid.sonyA}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         })); 
    
      return false;
   }
   
// condicion kaon //  

   else if(codigos === 'sony' && tipo === 'kaon'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos kaon para televisores sony',
         text:`${resultadoskaon.sonyK}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }

   // condicion kaon2 //  

   else if(codigos === 'sony' && tipo === 'kaon2'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos kaon2 para televisores sony',
         text:`${resultadoskaon.sonyK}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }
   
   // condicion universal1 //

   else if(codigos === 'sony' && tipo === 'universal1'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos universal1 para televisores sony',
         text:`${resultadosuniversal1.sonyU}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

      // condicion universal2 //

   else if(codigos === 'sony' && tipo === 'universal2'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos universal2 para televisores sony',
         text:`${resultadosuniversal2.sonyU}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

     // condicion android //  

   if(codigos === 'samsung' && tipo === 'android'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos android para televisores samsung',
         text:`${resultadosandroid.samsungA}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         })); 
    
      return false;
   }
   
// condicion kaon //  

   else if(codigos === 'samsung' && tipo === 'kaon'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos kaon para televisores samsung',
         text:`${resultadoskaon.samsungK}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }

   // condicion kaon2 //  

   else if(codigos === 'samsung' && tipo === 'kaon2'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos kaon2 para televisores samsung',
         text:`${resultadoskaon.samsungK}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }
   
   // condicion universal1 //

   else if(codigos === 'samsung' && tipo === 'universal1'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos universal1 para televisores samsung',
         text:`${resultadosuniversal1.samsungU}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

      // condicion universal2 //

   else if(codigos === 'samsung' && tipo === 'universal2'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos universal2 para televisores samsung',
         text:`${resultadosuniversal2.samsungU}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

     // condicion android //  

   if(codigos === 'hyundai' && tipo === 'android'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos android para televisores hyundai',
         text:`${resultadosandroid.hyundaiA}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         })); 
    
      return false;
   }
   
// condicion kaon //  

   else if(codigos === 'hyundai' && tipo === 'kaon'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos kaon para televisores hyundai',
         text:`${resultadoskaon.hyundaiK}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }

   // condicion kaon2 //  

   else if(codigos === 'hyundai' && tipo === 'kaon2'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos kaon2 para televisores hyundai',
         text:`${resultadoskaon.hyundaiK}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }
   
   // condicion universal1 //

   else if(codigos === 'hyundai' && tipo === 'universal1'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         text:`${strings.universal}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

      // condicion universal2 //

   else if(codigos === 'hyundai' && tipo === 'universal2'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         text:`${strings.universal}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

      // condicion android //  

   if(codigos === 'sansui' && tipo === 'android'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos android para televisores sansui',
         text:`${resultadosandroid.sansuiA}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         })); 
    
      return false;
   }
   
// condicion kaon //  

   else if(codigos === 'sansui' && tipo === 'kaon'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         text:`${strings.kaon}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }

   // condicion kaon2 //  

   else if(codigos === 'sansui' && tipo === 'kaon2'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         text:`${strings.kaon}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }
   
   // condicion universal1 //

   else if(codigos === 'sansui' && tipo === 'universal1'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         text:`${strings.universal}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

      // condicion universal2 //

   else if(codigos === 'sansui' && tipo === 'universal2'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         text:`${strings.universal}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }
 // condicion android //  

 if(codigos === 'panasonic' && tipo === 'android'){
   toString(Swal.fire({
      width: '300px',
      icon:'success',
      title:'codigos android para televisores panasonic',
      text:`${resultadosandroid.panasonicA}`,
      timer:60000,
      allowOutsideClick: false,
      color:"black",
      })); 
 
   return false;
}

// condicion kaon //  

else if(codigos === 'panasonic' && tipo === 'kaon'){
   toString(Swal.fire({
      width: '300px',
      icon:'success',
      title:'codigos kaon para televisores panasonic',
      text:`${resultadoskaon.panasonicK}`,
      timer:60000,
      allowOutsideClick: false,
      color:"black",
      }));

   return false;
}

// condicion kaon2 //  

else if(codigos === 'panasonic' && tipo === 'kaon2'){
   toString(Swal.fire({
      width: '300px',
      icon:'success',
      title:'codigos kaon2 para televisores panasonic',
      text:`${resultadoskaon.panasonicK}`,
      timer:60000,
      allowOutsideClick: false,
      color:"black",
      }));

   return false;
}

// condicion universal1 //

else if(codigos === 'panasonic' && tipo === 'universal1'){
   toString(Swal.fire({
      width: '300px',
      icon:'success',
      title:'codigos universal1 para televisores panasonic',
      text:`${resultadosuniversal1.panasonicU}`,
      timer:60000,
      allowOutsideClick: false,
      color:"black",
      }));

   return false;
  }

   // condicion universal2 //

else if(codigos === 'panasonic' && tipo === 'universal2'){
   toString(Swal.fire({
      width: '300px',
      icon:'success',
      title:'codigos universal2 para televisores panasonic',
      text:`${resultadosuniversal2.panasonicU}`,
      timer:60000,
      allowOutsideClick: false,
      color:"black",
      }));

   return false;
  }

   // condicion android //  

   if(codigos === 'challenger' && tipo === 'android'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos android para televisores challenger',
         text:`${resultadosandroid.challengerA}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         })); 
    
      return false;
   }
   
// condicion kaon //  

   else if(codigos === 'challenger' && tipo === 'kaon'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos kaon para televisores challenger',
         text:`${resultadoskaon.challengerK}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }

   // condicion kaon2 //  

   else if(codigos === 'challenger' && tipo === 'kaon2'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos kaon2 para televisores challenger',
         text:`${resultadoskaon.challengerK}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }
   
   // condicion universal1 //

   else if(codigos === 'challenger' && tipo === 'universal1'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos universal1 para televisores challenger',
         text:`${resultadosuniversal1.challengerU}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

      // condicion universal2 //

   else if(codigos === 'challenger' && tipo === 'universal2'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos universal2 para televisores challenger',
         text:`${resultadosuniversal2.challengerU}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

      // condicion android //  

   if(codigos === 'phillips' && tipo === 'android'){
      toString(Swal.fire({
         width: '300px',
         icon:'success',
         title:'codigos android para televisores phillips',
         text:`${resultadosandroid.philipsA}`,
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         })); 
    
      return false;
   }
   
// condicion kaon //  

   else if(codigos === 'phillips' && tipo === 'kaon'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         title:'codigos kaon para phillips no encontrados',
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }

   // condicion kaon2 //  

   else if(codigos === 'challenger' && tipo === 'kaon2'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         title:'codigos kaon2 para phillips no encontrados',
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
   }
   
   // condicion universal1 //

   else if(codigos === 'challenger' && tipo === 'universal1'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         title:'codigos universal para phillips no encontrados',
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }

      // condicion universal2 //

   else if(codigos === 'challenger' && tipo === 'universal2'){
      toString(Swal.fire({
         width: '300px',
         icon:'error',
         title:'codigos universal para phillips no encontrados',
         timer:60000,
         allowOutsideClick: false,
         color:"black",
         }));

      return false;
     }


     





   







//debe ser al final el else o sino  return;false me comenta todo el resto del codigo//


else{ 
    toString(Swal.fire({
      width: '300px',
       icon:'error',
       title:' resultados no econtrados' ,
       timer:60000,
       allowOutsideClick: false,
       color:"black",
      }));
       return false;
     }
    }
});
   

      
   


 // let nuevaMarca = document.querySelector('#busqueda').value;

                                                   // if (nuevaMarca !== '') {
                                                   //   MARCAS.push(nuevaMarca.toLocaleLowerCase().trim())
                                                   // }





