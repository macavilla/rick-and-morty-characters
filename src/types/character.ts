export enum CharacterStatus {
  alive = "Alive",
  dead = "Dead",
  unknown = "unknown",
}

export enum CharacterGender {
  female = "Female",
  male = "Male",
  genderless = "Genderless",
  unknown = "unknown",
}

export interface CharacterType {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
