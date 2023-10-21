document.addEventListener('DOMContentLoaded', () => {
  fetch('./assets/apitemp.json') //fetch('https://perenual.com/api/species-list?key=sk-nFtz6533eea2241f92621')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud a la API');
        }
        return response.json();
      })
      .then(data => {
        
        const plants = data.data; 
        const ulProducts = document.getElementById("Products"); 
        for (let i = 0; i < plants.length; i++) { 
            const plant = plants[i]; 
            const li = document.createElement('li'); 
            li.classList.add('product');
            li.innerHTML = `<a href="./detalles.html?id=${plant.id}""> <img src="${plant.default_image.medium_url}"  draggable="false"> </a>
            <h3>${plant.common_name}</h3>
            <p>$${Math.round(Math.random()*(5000-500)+500)+.99}
            
            `;

            ulProducts.appendChild(li); 
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
});
