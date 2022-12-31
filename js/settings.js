const graf = d3.select(".graficas")
const tooltip = d3.select("#tooltip")
const country = d3.select("#country")
const population = d3.select("#population")
const btnAnimacion = d3.select("#btnAnimacion")

const margins = { left: 75, top: 40, right: 10, bottom: 50 }
const anchoTotal = +graf.style("width").slice(0, -2)
const altoTotal = (anchoTotal * 9) / 16
const ancho = anchoTotal - margins.left - margins.right
const alto = altoTotal - margins.top - margins.bottom

const svg = graf
  .append("svg")
  .attr("width", anchoTotal)
  .attr("height", altoTotal)
  .attr("class", "fig")

const g = svg
  .append("g")
  .attr("transform", `translate(${margins.left}, ${margins.top})`)

const clip = g
  .append("clipPath")
  .attr("id", "clip")
  .append("rect")
  .attr("width", ancho)
  .attr("height", alto)

const year = g
  .append("text")
  .attr("x", ancho / 2)
  .attr("y", alto / 2)
  .attr("class", "year")

g.append("rect")
  .attr("x", "0")
  .attr("y", "0")
  .attr("width", ancho)
  .attr("height", alto)
  .attr("class", "grupo")

const x = d3.scaleLog().range([0, ancho])
const y = d3.scaleLinear().range([alto, 0])
const A = d3.scaleLinear().range([20, 70600])
const continente = d3.scaleOrdinal().range(d3.schemeSet2)

const xAxis = d3.axisBottom(x).tickSize(-alto)
const yAxis = d3.axisLeft(y).tickSize(-ancho)

var iy, miny, maxy
var animando = false
var intervalo
var pais


const ajuste = (data)=>{  x.domain(d3.extent(data, (d) => d.income))
  y.domain(d3.extent(data, (d) => d.life_exp))
  A.domain(d3.extent(data, (d) => d.population))
  continente.domain(Array.from(new Set(data.map((d) => d.continent))))

  miny = d3.min(data, (d) => d.year)
  maxy = d3.max(data, (d) => d.year)
  iy = miny

  g.append("g")
    .attr("transform", `translate(0, ${alto})`)
    .attr("class", "ejes")
    .call(xAxis)
  g.append("g").attr("class", "ejes").call(yAxis)

  g.append("text")
    .attr("x", ancho / 2)
    .attr("y", alto + 40)
    .attr("text-anchor", "middle")
    .attr("class", "labels")
    .text("Ingreso per cápita anual (USD)")

  g.append("g")
    .attr("transform", `translate(-40, ${alto / 2})`)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("class", "labels")
    .text("Expectativa de Vida (años)")


  }