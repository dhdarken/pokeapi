//const weakness={
  //bug:{flying,rock,fire},
  //dragon:{dragon,ice,fairy},
  //electric:{ground},
  //fairy:{veneno},
  //fighting:{fairy,psychic,flying},
  //fire:{water,ground,rock},
  //flying:{ice,rock,electric},
  //grass:{fire,ice,flying,bug,poison},
  //ground:{grass,ice,water},
  //ghost:{ghost},
  //ice:{fire,fighting,rock},
  //normal:{fighting},
  //poison:{ground,psychic},
  //psychic:{bug,ghost},
  //rock:{fighting,water,grass},
  //water:{grass,electric},
//};



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
  poison:"#6c5ce7",
  psychic:"#a29bfe",
  rock:"#2d3436",
  water:"#0190FF",
}
const especies = document.querySelector(".card");
const getUrl= new URLSearchParams(window.location.search);
let id = getUrl.get("id");
const url="https://pokeapi.co/api/v2/pokemon";
function getPokeImag(id){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }

const urlFinal=`${url}/${id}`;


const d=document;
const btnAnterior=d.getElementById("btnAnterior");
const btnSiguiente=d.getElementById("btnSiguiente");
btnAnterior.addEventListener("click",(e)=>{
  window.location.href=`/details.html?id=${id-1}`;
  })
 

btnSiguiente.addEventListener("click",(e)=>{
  window.location.href=`/details.html?id=${Number(id)+1}`;
})


fetch(urlFinal)
.then((resolved) => resolved.json())
.then(data => {
        console.log(data)
        const pokename= data.name;
        const hp=data.stats[0].base_stat;
        const statAtack=data.stats[1].base_stat;
        const statDef=data.stats[2].base_stat;
        const specAtack=data.stats[3].base_stat;
        const specDefen=data.stats[4].base_stat;
        const statSpeed=data.stats[5].base_stat;
        //for (let i = 0; i <data.types.length; i++) {
          //const themeColor= typeColor[data.types[i].type.name];
          //console.log(themeColor);
          //console.log(typeColor);
        //}

        card.innerHTML=`
          <p id="id"> ${id}</p>
          <img id="w_imag" src="${getPokeImag(id)}" alt="pokemon ${pokename} ">

          <h2 class="pokename">${pokename} </h2>
          <div class="types">
          ${data.types?.map(pokemonType=> (
            `<span class="types" style="background-color:${typeColor[pokemonType.type.name]}" >`+pokemonType?.type?.name+'</span>'
          )).join(' ')}
          </div>
          <div class="abilities">
          ${data.abilities?.map(habilitiesPoke=>(
            "<span>"+habilitiesPoke?.ability?.name+"</span>"
          )).join(" ")}
          </div>
          <div class="pokestats">
              <div>
                <h3 id="hp">${hp} </h3>
                <span >HP</span>
              </div>
              <div>
                  <h3 id="atk">${statAtack} </h3>
                  <span>ATK</span>
              </div>
              <div>
                  <h3 id="def">${statDef} </h3>
                  <span>DEF</span>
              </div>
              <div>
              <h3 id="spa">${specAtack}</h3>
              <span>SpA</span>
              </div>
              <div>
                <h3 id="spd">${specDefen} </h3>
                <span>SpD</span>
              </div>
              <div>
                <h3 id="sped">${statSpeed} </h3>
                <span>SPED</span>
              </div>
          </div>
        
        `;
      })
.catch((error)=>console.error());


