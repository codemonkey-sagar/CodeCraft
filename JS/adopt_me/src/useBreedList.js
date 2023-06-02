import { useQuery } from "@tanstack/react-query";
import fetchBreedLists from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedLists);

  return [results?.data?.breeds ?? [], results.status];
}
