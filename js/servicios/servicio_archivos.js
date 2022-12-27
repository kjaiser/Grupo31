$(document).ready(function(){
    console.log("listo");


});

const mostrar = (g)=>{
    g = "."+g
    if($(g).hasClass("ocultar")){
        $(g).removeClass("ocultar")
    }else{
        $(g).addClass("ocultar")
    }
    console.log(g)
  }