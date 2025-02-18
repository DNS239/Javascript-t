

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>


                <div class="detail">

                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                        alt="${pokemon.name}">

                </div>
            </li>
    `
}

const pokemonList = document.getElementById('pokemonList')
// pokemonList.innerHTML += '<li>Test<li/>'



pokeApi.getPokemons().then((pokemons = []) => {


    // const novaLista = 

    // const newHtml = novaLista

    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

    // const listItems = []


    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLi(pokemon))
    // }
    // console.log(listItems)
    // pokemonList.innerHTML += convertPokemonToLi(pokemon)
})


// .catch((error) => console.log(error))
// .finally(() => console.log('Fetch request completed'))


