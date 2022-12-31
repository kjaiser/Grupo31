const delta = (d) => {
    iy += d
    if (iy > maxy) {
      clearInterval(intervalo)
      animando = false
      btnAnimacion
        .classed("btn-success", true)
        .classed("btn-danger", false)
        .html("<i class='fas fa-play'></i>")
      iy = maxy
    }
    if (iy < miny) iy = miny
  
    render1(data)
  }
  
  const showTooltip = (d) => {
    pais = d.country
  
    tooltip
      .style("left", x(d.income) + "px")
      .style("top", y(d.life_exp) + "px")
      .style("display", "block")
    country.text(d.country)
    population.text(d.population.toLocaleString("en-US"))
  }
  
  const hideTooltip = () => {
    tooltip.style("display", "none")
  }
  
  const toggleAnimacion = () => {
    animando = !animando
    if (animando) {
      btnAnimacion
        .classed("btn-success", false)
        .classed("btn-danger", true)
        .html("<i class='fas fa-pause'></i>")
  
      intervalo = setInterval(() => delta(1), 500)
    } else {
      btnAnimacion
        .classed("btn-success", true)
        .classed("btn-danger", false)
        .html("<i class='fas fa-play'></i>")
  
      clearInterval(intervalo)
    }
  }