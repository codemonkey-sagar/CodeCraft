import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}

// import { useState, useEffect } from "react";

// const localCache = {};

// export default function useBreedList(animal) {
//   const [breedList, setBreedList] = useState([]);
//   const [status, setStatus] = useState("unloaded");

//   useEffect(() => {
//     if (!animal) {
//       setBreedList([]);
//     } else if (localCache[animal]) {
//       setBreedList(localCache[animal]);
//     } else {
//       requestBreedList();
//     }

//     async function requestBreedList() {
//       setBreedList([]);
//       setStatus("loading");

//       const response = await fetch(
//         `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
//       );

//       const json = await response.json();
//       localCache[animal] = json.breeds || [];
//       setBreedList(localCache[animal]);
//       setStatus("loaded");
//     }
//   }, [animal]); // eslint-disable-line react-hooks/exhaustive-deps

//   return [breedList, status];
// }
