import { CharacterType } from "../types";

const getCharacters = async (input: string) => {
  const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${input}`);
  const data: CharacterType = await response.json();
  return data;
};

export default getCharacters;
 /*
 {
	"name": "Jon Snow",
	"gender": "Male",
	"culture": "Northmen",
	"born": "In 283 AC",
}
 */