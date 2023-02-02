const pokeList = document.getElementById("pokelist");

(() => {
  const pokemonshtml = document.getElementById("pokelist");
  fetch("https://pokeapi.co/api/v2/pokemon?offset=10&limit=200")
    .then((resolved) => resolved.json())
    .then((resolved) => {
      console.log(resolved);
      let pokemonsli = "";
      let poke = resolved.results;
      for (let i = 0; i < poke.length; i++) {
        const ID = poke[i].url.split("/")[6];
        console.log(ID);
        const pokename = poke[i].name;
        console.log(pokename);
        pokemonsli =
          pokemonsli +
          `
    <li>
        <div>
            <div id="triangulo">
                ${ID}
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID}.png" alt="foto de el pokemon ${pokename} ">
            <button id="btn-names">${pokename}</button>
        </div>
    </li>
   `;
        pokemonshtml.innerHTML = pokemonsli;
      }
    })
    .catch((error) => {
      console.log(error);
    });
})();
