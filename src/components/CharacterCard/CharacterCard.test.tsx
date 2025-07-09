import { screen, render } from "@testing-library/react";
import {
  mockCharacter,
  mockCharacterCardProps,
} from "./__mockData__/CharacterCard.mock";

import CharacterCard from "./CharacterCard";

describe("CharacterCard", () => {
  it("renders CharacterCard and matches snapshot", () => {
    const { container } = render(<CharacterCard {...mockCharacterCardProps} />);
    expect(container).toMatchSnapshot();
  });

  // it("should render character data", () => {
  //   render(<CharacterCard {...mockCharacterCardProps} />);

  //   const characterName = screen.getByText(mockCharacter.name);
  //   expect(characterName).toBeInTheDocument();
  // });
});
