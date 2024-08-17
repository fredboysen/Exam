useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`
      );
      const data = await response.json();
      const pokemonsData = await Promise.all(
        data.results.map(async (pokemonurl) => {
          const response = await fetch(pokemonurl.url);
          return response.json();
        })
      );
      setPokemon(pokemonsData);
    }

    fetchData();
  }, [page]);
