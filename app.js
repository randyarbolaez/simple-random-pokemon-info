const randomPokemonNumber = Math.floor(Math.random() * 808);

const blah = fetch(
  `https://pokeapi.co/api/v2/pokemon-species/${randomPokemonNumber}`
);

blah
  .then(res => res.json())
  .then(pokemon => {
    let pokemonPicture = document.getElementById('pokemon-picture');
    let name = document.getElementById('name');
    let nickName = document.getElementById('nickname');
    let captureRate = document.getElementById('capture-rate');
    let baseHappiness = document.getElementById('base-happiness');
    let growthRate = document.getElementById('growth-rate');
    console.log(pokemon);
    let title = document.getElementById('title');
    title.innerHTML = `SOME OF ${pokemon.name.toUpperCase()}'S INFO`;
    pokemonPicture.innerHTML = `<img src="https://img.pokemondb.net/artwork/${
      pokemon.name
    }.jpg" alt="${pokemon.name}">`;
    name.innerHTML = pokemon.name;
    nickName.innerHTML = pokemon.genera[2].genus;
    captureRate.innerHTML = `Capture Rate: ${pokemon.capture_rate}`;
    baseHappiness.innerHTML = `Base Happiness: ${pokemon.base_happiness}`;
    growthRate.innerHTML = `Growth Rate: ${pokemon.growth_rate.name}`;
  });
