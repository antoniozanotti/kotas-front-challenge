import { useQuery } from "@tanstack/vue-query";

async function fetchPokemon(name: string) {
  let fetchUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const res = await fetch(fetchUrl);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

export default function (name: string) {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemon(name),
  });
}
