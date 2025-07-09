import { screen, render } from "@testing-library/react";
import { mockDashboardProps } from "./__mockData__/Dashboard.mock";

import Dashboard from "./Dashboard";

describe("CharacterCard", () => {
  it("renders CharacterCard and matches snapshot", () => {
    const { container } = render(<Dashboard {...mockDashboardProps} />);
    expect(container).toMatchSnapshot();
  });

  // it("should render characters data", () => {
  //   render(<CharacterList {...mockCharacterListProps} />);

  // });
});
