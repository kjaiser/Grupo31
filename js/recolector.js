
const render1 = () => {
  
  const newData = d3.filter(data, (d) => d.year == iy);
  const circle = g.selectAll("circle").data(newData, (d) => d.country);
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
  const bar = g.selectAll("bar").data(newData).enter();
    bar.append("rect")
    .attr("x",0)
    .attr("transform", function(d, i) {
      return "translate(" + (i*ancho)+ ", 0)";
    })
    .transition()
    .duration(2000)
    .attr("width",ancho)
    .attr("heigth", 0)

    .attr("dy", ".35em")
    .attr("y", function(d){
      return alto - y(d.life_exp)+ "px"; })
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
    .attr("dx", ".35em")
    .text(function(d) { return d.life_exp; });

}

const render=(t_g)=>{
  if(t_g==1) render1();
  else if(t_g==2) render2();
}
