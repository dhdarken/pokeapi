

const d=document;
const pokeList = d.getElementById("pokelist");
const pokemonDetails=d.getElementById("details-section");
const listSection= d.getElementById("listsection");
let nextLink="";
let prevLink="";

const prev=()=>{
  getPokemons(prevLink)
}

const next=()=>{
  getPokemons(nextLink)
}

let url="https://pokeapi.co/api/v2/pokemon/";
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
      console.log(currentPokemon);
      window.location.href = `./details.html?id=${Event.target.id} `
      listSection.style.display="none";
      pokemonDetails.style.display="block";
      fillPokemonDetails();
    });
  });
};


  const pokemonshtml = document.getElementById("pokelist");
const getPokemons=(url)=>{
  fetch(url)
    .then((resolved) => resolved.json())
    .then((resolved) => {
      let pokemonsli = "";
      let poke = resolved.results;
      for (let i = 0; i < poke.length; i++) {
        const ID = poke[i].url.split("/")[6];
        const pokename = poke[i].name;
        nextLink=resolved.next;
        prevLink=resolved.previous;
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
   ;
        pokemonshtml.innerHTML = pokemonsli;
        addListeners();
      }
    })
  .catch((error) => {
      console.log(error);
    });
}
getPokemons(`${url}?offset=0&limit=10`);
  