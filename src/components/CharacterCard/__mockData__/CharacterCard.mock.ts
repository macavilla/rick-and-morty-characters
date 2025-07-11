import {
  CharacterType,
  CharacterStatus,
  CharacterGender,
} from "@/types/character";
import { type CharacerCardProps } from "../CharacterCard";

export const mockCharacter: CharacterType = {
  id: 1,
  name: "Rick Sanchez",
  status: CharacterStatus.alive,
  species: "Human",
  type: "",
  gender: CharacterGender.male,
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/1"],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

export const mockOnSelect = jest.fn();

export const mockCharacterCardProps: CharacerCardProps = {
  character: mockCharacter,
  onSelect: mockOnSelect,
  isSelected: false,
  isDisabled: false,
};
