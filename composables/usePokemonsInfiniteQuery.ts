import { useInfiniteQuery } from "@tanstack/vue-query";

const fetchPage = async (pageParam = 0, searchValue: Ref) => {
  const initialFetchUrl = `https://pokeapi.co/api/v2/pokemon/${searchValue.value}?limit=24`;
  const fetchUrl = pageParam === 0 ? initialFetchUrl : pageParam.toString();
  const res = await fetch(fetchUrl);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function (searchValue: Ref) {
  return useInfiniteQuery({
    queryKey: ["pokemons", searchValue],
    queryFn: ({ pageParam }) => fetchPage(pageParam, searchValue),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.next;
    },
  });
}
