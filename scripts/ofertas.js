document.addEventListener('DOMContentLoaded', () => {
  fetch('./assets/apitemp.json') //fetch('https://perenual.com/api/species-list?key=sk-nFtz6533eea2241f92621')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud a la API');
        }
        return response.json();
      })
      .then(data => {
        function randomSort() {
          return 0.5 - Math.random();}
        const plants = data.data; 
        const ulProducts = document.getElementById("Products"); 
        plants.sort(randomSort)
        for (let i = 0; i < plants.length; i++) { 
          const plant = plants[i]; 
          const random = Math.round(i + (Math.random() * 10));
          precio = Math.random()*(5000-500)+500;
          descuento = Math.round(Math.random()*(95-70)+70);
          dias = Math.round(Math.random()*(14)-7)
          if (dias<0)
            diastext=""
          else if (dias==0)
            diastext = "Solo por hoy" 
          else diastext = `restan ${dias}días!` 
          if (random%3==0){
            li = document.createElement('li'); 
            li.classList.add('product');
            li.innerHTML = `<a href="./detalles.html?id=${plant.id}""> <img src="${plant.default_image.medium_url}"  draggable="false"> </a>
            <descuento>${100-descuento}% OFF! ${diastext}</descuento>
            <h3>${plant.common_name}</h3>
            <p><del>$${Math.round(precio)+.99}</del> - $${Math.round(precio*descuento/100)+.99}</p>
            
            `;
            ulProducts.appendChild(li); 
          }
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
});
