
const rellenarHtml=(data)=>{
      var campos = Object.keys(data[0]);
  console.log(campos);

  campos.forEach(element => {
    $("#campos").append(
      '<a href="#" class="list-group-item-action text-start ps-5 py-1" aria-current="true"><i class="fa-solid fa-arrow-right me-5"></i>'+element+'</a>'
    );
  });}
