  document.addEventListener("DOMContentLoaded", function() {
    const inputBusqueda = document.querySelector(".poke-search input");
    const filtros = document.querySelectorAll(".poke-filter .types-img");
    const pokemons = document.querySelectorAll(".pokedex .pokemon");
  
    let filtroActivo = null;
  
    // Manejar clic en filtros
    filtros.forEach(function(filtro) {
      filtro.addEventListener("click", function() {
        // Si el filtro ya está activo, desactivarlo
        if (filtro.classList.contains("active")) {
          filtro.classList.remove("active");
          filtroActivo = null;
        } else {
          // Desactivar todos los filtros
          filtros.forEach(function(f) {
            f.classList.remove("active");
          });
          // Activar el filtro seleccionado
          filtro.classList.add("active");
          filtroActivo = filtro.alt.toLowerCase(); // Obtener el tipo de Pokémon asociado al filtro
        }
        filtrarPokemon();
      });
    });
  
    // Manejar entrada en el input de búsqueda
    inputBusqueda.addEventListener("input", function() {
      filtrarPokemon();
    });
  
    // Función para filtrar Pokémon
    function filtrarPokemon() {
      const textoBusqueda = inputBusqueda.value.trim().toLowerCase(); // Obtener el texto de búsqueda en minúsculas y sin espacios en blanco
  
      pokemons.forEach(function(pokemon) {
        const idPokemon = pokemon.id.split(" ")[0].toLowerCase(); // Obtener el primer ID del Pokémon en minúsculas
  
        // Verificar si el filtro está activo y si el Pokémon coincide con el filtro
        const filtroActivoCoincide = !filtroActivo || pokemon.classList.contains(`type-${filtroActivo}`);
  
        // Comprobar si el ID del Pokémon coincide con el texto de búsqueda y con el filtro activo
        if (idPokemon.includes(textoBusqueda) && filtroActivoCoincide) {
          pokemon.style.display = "block"; // Mostrar el Pokémon si coincide con la búsqueda y el filtro activo
        } else {
          pokemon.style.display = "none"; // Ocultar el Pokémon si no coincide
        }
      });
    }
  });