
const render1 = () => {
  
  const newData = d3.filter(data, (d) => d.year == iy);
  const circle = g.append("g").attr("class","g-circular").selectAll("circle").data(newData, (d) => d.country);
  circle
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.income))
    .attr("cy", (d) => y(d.life_exp))
    .attr("r", 0)
    .attr("fill", "#00FF0088")
    .attr("stroke", "#00000088")
    .attr("clip-path", "url(#clip)")
    .on("click", (_, d) => showTooltip(d))
    // .on("mouseout", () => hideTooltip())
    .merge(circle)
    .transition()
    .duration(500)
    .attr("cx", (d) => x(d.income))
    .attr("cy", (d) => y(d.life_exp))
    .attr("r", (d) => Math.sqrt(A(d.population) / Math.PI))
    .attr("fill", (d) => continente(d.continent) + "88")

    circle
    .exit()
    .transition()
    .duration(500)
    .attr("r", 0)
    .attr("fill", "#ff000088")
    .remove()

  year.text(iy)

  d = newData.filter((d) => d.country == pais)[0]
  tooltip.style("left", x(d.income) + "px").style("top", y(d.life_exp) + "px")
  country.text(d.country)
  population.text(d.population.toLocaleString("en-US"))

}

const render2 = ()=>{
  const ancho = 2;
  const newData = d3.filter(data, (d) => d.year == iy);

  var dominio  = newData.map(d => d.country);
  const scaleB = d3.scaleBand().domain(dominio).range([0, ancho]).paddingInner(0.2).paddingOuter(0.2);
  const bar = g.append("g").selectAll("bar").data(newData).enter();


  bar.append("rect")
    .attr("y", 0)
    .attr("x",(d) => scaleB(d.country))
    //.attr("transform", function(d, i) {
    //  return "translate(" + (i*scaleB.bandwidth)+ ", 0)";
    //})
    //.transition()
    //.duration(2000)
    .attr("width",scaleB.bandwidth)
    //.attr("heigth", 0)

    //.attr("dy", ".35em")
    .attr("height", function(d){
      return y(d.life_exp) + "px"; })
    .attr("fill", "teal");

  bar.append("text")
    .attr("x", 0)
    .transition()
    .duration(2000)
    .attr("y", function(d) {
      return d.life_exp;
    })
    .attr("cx", ".35em")
    .text(function(d) { return scaleB(d.country); });

}

const render=(t_g)=>{
  if(t_g==1) render1();
  else if(t_g==2) render2();
}
