
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
      console.log(currentPokemon);
      window.location.href = `./details.html?id=${Event.target.id} `
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
   ;
        pokemonshtml.innerHTML = pokemonsli;
        addListeners();
      }
    })
  .catch((error) => {
      console.log(error);
    });
})();
