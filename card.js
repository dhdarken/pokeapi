const typeColor={
  bug:"#26de81",
  dragon:"#ffeaa7",
  electric:"#fed330",
  fairy:"#FF0069",
  fighting:"#30336b",
  fire:"#f0932b",
  flying:"#81ecec",
  grass:"#00b894",
  ground:"#EFB549",
  ghost:"#a55eea",
  ice:"#74b9ff",
  normal:"#95afc0",
  posion:"#6c5ce7",
  phychic:"#a29bfe",
  rock:"#2d3436",
  water:"#0190FF",
}

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
        console.log(data);
        const ability1=data.abilities[0].ability.name;
        const ability2=data.abilities[1].ability.name;
        const type1=data.types[0].type.name;
        const pokename= data.name;
        const hp=data.stats[0].base_stat;   
        const statAtack=data.stats[1].base_stat;
        const statDef=data.stats[2].base_stat;
        const specAtack=data.stats[3].base_stat;
        const specDefen=data.stats[4].base_stat;
        const statSpeed=data.stats[5].base_stat;
        //console.log(ability1);
        //console.log(ability2);
        //console.log(type1);
        //console.log(pokename);
        //console.log(hp);
        //console.log(statAtack);
        //console.log(statDef);
        //console.log(specAtack);
        //console.log(specDefen);
        //console.log(statSpeed);
        card.innerHTML=`
        
          <p id="hp"> ${id}</p>
          <img id="w_imag" src="${getPokeImag(id)}" alt="pokemon ${pokename} ">
          <h2 class="pokename">${pokename} </h2>
          <div id="types">
                  <div>
                    <span>type 1</span>
                    <h3>${type1} </h3>
                  </div>
          </div>
          <div id="abilities">
                  <div>
                    <span>Ability 1</span>
                    <h3>${ability1} </h3>
                  </div>
                  <div>
                    <span>Ability 2</span>
                    <h3>${ability2} </h3>
                  </div>
          </div>
          <div class="pokestats">
              <div>
                <h3>${hp} </h3>
                <span>🩸</span>
              </div>
              <div>
                  <h3>${statAtack} </h3>
                  <span>⚔️</span>
              </div>
              <div>
                  <h3>${statDef} </h3>
                  <span>🛡️</span>
              </div>
              <div>
              <h3>${specAtack}</h3>
              <span>⚔️➕</span>
              </div>
              <div>
                <h3>${specDefen} </h3>
                <span>🛡️➕</span>
              </div>
              <div>
                <h3>${statSpeed} </h3>
                <span>💨</span>
              </div>
          </div>
        
        `  
      })
.catch((error)=>console.error());
;