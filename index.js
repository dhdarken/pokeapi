
const pokeList = document.getElementById("pokelist");
const pokemonDetails=document.getElementById("details-section");
const listSection= document.getElementById("listsection");
function fillPokemonDetails(ID){
}

function getPokeImag(ID){
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID}.png`
}
let currentPokemon= undefined;

function addListeners(){
  const pokebutons= document.getElementsByClassName("btn-names");
  Array.from(pokebutons).forEach((pokebtn)=>{
    pokebtn.addEventListener("click",(Event)=>{
      currentPokemon=Event.target.id;
      listSection.style.display="none";
      pokemonDetails.style.display="block";
      fillPokemonDetails();
    });
  });
};

(() => {
  const pokemonshtml = document.getElementById("pokelist");
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
    .then((resolved) => resolved.json())
    .then((resolved) => {
      let pokemonsli = "";
      let poke = resolved.results;
      for (let i = 0; i < poke.length; i++) {
        const ID = poke[i].url.split("/")[6];
        const pokename = poke[i].name;
        pokemonsli =
          pokemonsli +
          `
    <li>
        <div>
            <div id="triangulo">
                ${ID}
            </div>
            <img src="${getPokeImag(ID)} ">
            <button id="${ID}" class="btn-names poke-name">${pokename}</button>
        </div>
    </li>
   `

   const url = "https://pokeapi.co/api/v2/pokemon/"
   const card = document.getElementById("card");
   const btn = document.getElementById("ID");

   let getPokeData=()=>{
    const finalurl=url+ID;
    fetch(finalurl)
    .then((Response)=>Response.json())
    .then((data)=>{
     generateCard(data);
    })
   };

   let generateCard=(data)=>{
    const hp=data.stats[0].base_stat;
    console.log(hp);    
    const pokename= data.name;
    const statAtack=data.stats[1].base_stat;
    const statDef=data.stats[2].base_stat;
    const statSpeed=data.stats[5].base_stat;

    card.innerHTML=`
    
      <p id="hp">
        <span id="hp">hp</span>
        ${hp}
      </p>
      <img src="${getPokeImag(ID)} " alt="pokemon ${pokename} ">
      <h2 class="pokename">${pokename} </h2>
      <div class="types">
          <span>type1</span>
          <span>type2</span>
      </div>
      <div class="pokestats">
          <div>
              <h3>${statAtack} </h3>
              <p>attack</p>
          </div>
          <div>
              <h3>${statDef} </h3>
              <p>Defense</p>
          </div>
          <div>
            <h3>${statSpeed} </h3>
            <p>Speed</p>
          </div>
      </div>
    
    `
   }
   
   getPokeData();
   ;
        pokemonshtml.innerHTML = pokemonsli;
        addListeners();
      }
    })
  .catch((error) => {
      console.log(error);
    });
})();
