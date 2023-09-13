const pokedex = document.getElementById('pokedex');
const searchInput = document.getElementById('search');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const modalName = document.getElementById('modal-name');
const modalType = document.getElementById('modal-type');
const modalWeight = document.getElementById('modal-weight');
const modalMoves = document.getElementById('modal-moves');

let pokemonData = [];

// Fetch Pokémon data from the JSON file
fetch('pokemons.json')
    .then((response) => response.json())
    .then((data) => {
        pokemonData = data;
        displayPokemonList(data);
    });

// Display the list of Pokémon
function displayPokemonList(data) {
    pokedex.innerHTML = '';
    data.forEach((pokemon) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${pokemon.name}</h3>
            <p><strong>Type:</strong> ${pokemon.type.join(', ')}</p>
        `;
        card.addEventListener('click', () => displayModal(pokemon));
        pokedex.appendChild(card);
    });
}

// Display the modal with Pokémon details
function displayModal(pokemon) {
    modalName.textContent = pokemon.name;
    modalType.textContent = pokemon.type.join(', ');
    modalWeight.textContent = pokemon.weight;
    modalMoves.innerHTML = '';
    pokemon.moves.forEach((move) => {
        const li = document.createElement('li');
        li.textContent = move;
        modalMoves.appendChild(li);
    });
    modal.style.display = 'block';
}

// Close the modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Filter Pokémon by name
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPokemon = pokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm)
    );
    displayPokemonList(filteredPokemon);
});