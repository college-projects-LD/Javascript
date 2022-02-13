
//fetch(url).then(convertToJason);
const search_term = document.getElementById('search');
const sButton = document.getElementById('searchButton');


const getPokemonData = async query => {
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
    const response = await fetch(url);

    if(response.status == 404){
        document.getElementById('errorCheck').textContent('Error 404 Not Found');
        return;
    }

    const pokemon = await response.json();

    console.log(pokemon);

    document.getElementById('updateImg').setAttribute('src', pokemon.sprites.versions["generation-iv"].platinum.front_default);
    document.getElementById('pokeName').innerHTML = pokemon.name;
    document.getElementById('HP').innerHTML = `HP ${pokemon.stats[0].base_stat}`;
    const typeContainer = document.getElementById('pokeType');
  
    const getPokemonTypes = () => {
    if (pokemon.types.length === 1){
        return pokemon.types[0].type.name
    } else {
        return `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`
    }
    }

typeContainer.innerHTML = getPokemonTypes();
    //document.getElementById('pokeType').innerHTML = `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`;
}

addEventListener('click', () => getPokemonData(search_term.value));





//mock https://run.mocky.io/v3/d05e59b2-4c5b-4927-a26d-6bf58c8361cc
 