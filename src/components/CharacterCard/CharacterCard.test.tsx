import { screen, render, fireEvent } from "@testing-library/react";
import {
  mockCharacterCardProps,
  mockOnSelect,
} from "./__mockData__/CharacterCard.mock";

import CharacterCard from "./CharacterCard";

describe("CharacterCard", () => {
  it("renders CharacterCard and matches snapshot", () => {
    const { container } = render(<CharacterCard {...mockCharacterCardProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders character name, image, status and species", () => {
    render(<CharacterCard {...mockCharacterCardProps} />);

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
    const image = screen.getByAltText("Rick Sanchez") as HTMLImageElement;

    expect(image).toBeInTheDocument();
  });

  it("displays green dot for alive status", () => {
    render(<CharacterCard {...mockCharacterCardProps} />);

    const status = screen.getByText("Alive");
    expect(status).toBeInTheDocument();
  });

  it("calls onSelect when clicked and not disabled", () => {
    render(<CharacterCard {...mockCharacterCardProps} />);

    fireEvent.click(screen.getByText("Rick Sanchez"));
    expect(mockOnSelect).toHaveBeenCalled();
  });

  it("does not call onSelect when disabled", () => {
    const onSelectMock = jest.fn();

    render(<CharacterCard {...mockCharacterCardProps} />);

    fireEvent.click(screen.getByText("Rick Sanchez"));
    expect(onSelectMock).not.toHaveBeenCalled();
  });

  it("applies selected styles when isSelected is true", () => {
    const { container } = render(
      <CharacterCard {...mockCharacterCardProps} isSelected={true} />
    );

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("border-indigo-950");
  });

  it("applies disabled styles when isDisabled is true", () => {
    const { container } = render(
      <CharacterCard {...mockCharacterCardProps} isDisabled />
    );

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("cursor-not-allowed");
  });
});
