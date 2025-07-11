import { screen, render, fireEvent } from "@testing-library/react";
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

  it("renders title and characters", () => {
    render(
      <CharacterList
        listId={1}
        characters={mockCharacters}
        selectedCharacter={null}
        otherSelectedCharacter={null}
        onSelect={jest.fn()}
      />
    );

    expect(screen.getByText("Character #1")).toBeInTheDocument();

    mockCharacters.forEach((character, index) => {
      expect(screen.getByText(mockCharacters[index].name)).toBeInTheDocument();
    });
  });

  it("calls onSelect when character is clicked", () => {
    const onSelectMock = jest.fn();

    render(
      <CharacterList
        listId={1}
        characters={mockCharacters}
        selectedCharacter={null}
        otherSelectedCharacter={null}
        onSelect={onSelectMock}
      />
    );

    fireEvent.click(screen.getByText(mockCharacters[0].name));
    expect(onSelectMock).toHaveBeenCalledWith(mockCharacters[0]);
  });

  it("calls onSelect(null) if character is already selected", () => {
    const onSelectMock = jest.fn();

    render(
      <CharacterList
        listId={1}
        characters={mockCharacters}
        selectedCharacter={mockCharacters[0]}
        otherSelectedCharacter={null}
        onSelect={onSelectMock}
      />
    );

    fireEvent.click(screen.getByText(mockCharacters[0].name));
    expect(onSelectMock).toHaveBeenCalledWith(null);
  });
});
