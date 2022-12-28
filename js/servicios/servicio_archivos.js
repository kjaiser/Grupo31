$(document).ready(function(){
    console.log("listo");

    var boton = $(".btn");
    boton.click(function(){
        boton.removeClass("seleccionado")
        $(this).addClass("seleccionado");
        var claseG = "." + $(this).val()
        $(".grafica").addClass("ocultar")
        $(claseG).removeClass("ocultar");
    })

});