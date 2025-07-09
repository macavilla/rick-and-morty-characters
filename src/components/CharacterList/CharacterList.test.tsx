import { screen, render } from "@testing-library/react";
import {
  mockCharacters,
  mockCharacterListProps,
} from "./__mockData__/CharacterList.mock";

import CharacterList from "./CharacterList";

describe("CharacterCard", () => {
  it("renders CharacterCard and matches snapshot", () => {
    const { container } = render(<CharacterList {...mockCharacterListProps} />);
    expect(container).toMatchSnapshot();
  });

  // it("should render characters data", () => {
  //   render(<CharacterList {...mockCharacterListProps} />);

  // });
});
