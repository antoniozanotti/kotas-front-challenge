import { useQuery } from "@tanstack/vue-query";

async function fetchPokemon(name: string) {
  let fetchUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const res = await fetch(fetchUrl);
  return res.json();
}

export default function (name: string) {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemon(name),
  });
}
