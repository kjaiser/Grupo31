
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

//Ancho y Altura

//Creará un elemento SVG 
var svg2 = d3.select("#histograma")
            .append("svg")
            .attr("width", ancho)
            .attr("height", alto)
            .attr("class", "fig");

svg2.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 20)
    .attr("height", 100)
    .attr("x", function(d, i) {
        return i * 21;  //Ancho de barras de 20 más 1 espacio 
    })
    .attr("y", function(d) {
        return 400 - d;  //Altura menos el dato
    })
    .attr("height", function(d) {
        return d;
    })
    //.attr("fill", "teal")
    .attr("fill", function(d) {
        return "rgb(0, 0, " + (d * 10) + ")";
        });
