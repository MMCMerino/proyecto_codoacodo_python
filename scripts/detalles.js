
const tarjetaDeDatos = document.getElementById("tarjeta_horizontal");
const queryString = document.location.search;

const id = new URLSearchParams(queryString).get("id");

async function traerDatos(){
  try{
    const response = await fetch('./assets/apitemp.json');
    console.log(response);
    const datos = await response.json();
    console.log(datos.data); //ver!!!

    const tarjetaFinal = datos.data.find( (plant) => (plant.id == id));// const tarjetaFinal = datos.events.find( (tarjeta) => (tarjeta._id == id));
    console.log(tarjetaFinal);

    

    tarjetaDeDatos.innerHTML = `<div class="tarjeta">
            <div class="card" style="max-width: 700px;">
           <div class="row g-0">
           <div class="col-md-6">
               <img src= ${tarjetaFinal.default_image.medium_url} class="img-fluid rounded-start " style="width: 100% ; height:100%;" alt="${tarjetaFinal.common_name}">
                </div>
            <div class="col-md-6">
            <div class="card-body">
             <h3 class="card-title">${tarjetaFinal.common_name} </h3>
            <p class="card-text">Nombre Cientifico: ${tarjetaFinal.scientific_name}</p>
            <p class="card-text">Ciclo de vida: ${tarjetaFinal.cycle}</p>
            <p class="card-text">Riego: ${tarjetaFinal.watering}</p>
            <p class="card-text">Sol: ${tarjetaFinal.sunlight}</p>
       
        <a href="./index.html" class="btn btn-danger">Inicio</a>
             </div>
            </div>
            </div>
          </div>
        </div> `;

}
catch(error){
  console.log(error);
}

}
traerDatos();