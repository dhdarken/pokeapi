const especies = document.querySelector(".card");
const getUrl= new URLSearchParams(window.location.search);
id = getUrl.get("id");
const url="https://pokeapi.co/api/v2/pokemon";
function getPokeImag(id){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }

fetch(`${url}/${id}`)
.then((resolved) => resolved.json())
.then(data => {
        const hp=data.stats[0].base_stat;   
        const pokename= data.name;
        const statAtack=data.stats[1].base_stat;
        const statDef=data.stats[2].base_stat;
        const statSpeed=data.stats[5].base_stat;
       
        card.innerHTML=`
        
          <p id="hp">
            <span>hp</span>
            ${hp}
          </p>
          <img id="w_imag" src="${getPokeImag(id)}" alt="pokemon ${pokename} ">
          <h2 class="pokename">${pokename} </h2>
        
          <div class="pokestats">
              <div>
                  <h3>${statAtack} </h3>
                  <span>attack</span>
              </div>
              <div>
                  <h3>${statDef} </h3>
                  <span>Defense</span>
              </div>
              <div>
                <h3>${statSpeed} </h3>
                <span>Speed</span>
              </div>
          </div>
        
        `})
.catch((error)=>console.error());
;