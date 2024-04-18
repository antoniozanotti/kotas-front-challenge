import { useInfiniteQuery } from "@tanstack/vue-query";

const fetchPage = async (pageParam = 0) => {
  const initialFetchUrl = "https://pokeapi.co/api/v2/pokemon/?limit=24";
  const fetchUrl = pageParam === 0 ? initialFetchUrl : pageParam.toString();
  const res = await fetch(fetchUrl);
  return res.json();
};

export default function () {
  return useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam }) => fetchPage(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.next;
    },
  });
}