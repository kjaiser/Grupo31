
const load = async () => {
  data = await d3.csv("../dbs/gapminder.csv", d3.autoType)
  data = d3.filter(data, (d) => d.income > 0 && d.life_exp != null)

  rellenarHtml(data);
  ajuste(data);
  graficar();
}


load();
