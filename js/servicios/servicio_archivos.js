const graficar=()=>{
    console.log("listo");

    var boton = $(".btn");
    boton.click(function(){
        boton.removeClass("seleccionado")
        $(this).addClass("seleccionado");
        var tipo_graf = $(this).val()
        render(tipo_graf);        
    })

}