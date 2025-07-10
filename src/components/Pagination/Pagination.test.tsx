import { screen, render, waitFor } from "@testing-library/react";
import { mockPaginationProps } from "./__mockData__/Pagination.mock";

import Pagination from "./Pagination";

describe("Pagination", () => {
  it("renders Pagination and matches snapshot", async () => {
    const { container } = render(<Pagination {...mockPaginationProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should render Pagination both arrows ", async () => {
    render(<Pagination {...mockPaginationProps} />);

    screen.findByRole("link", { name: "<<" });
    screen.findByRole("link", { name: ">>" });
  });
});
