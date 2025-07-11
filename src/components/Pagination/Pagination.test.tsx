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

  it("renders only prev link", () => {
    render(
      <Pagination
        paginationInfo={{
          ...mockPaginationProps.paginationInfo,
          next: null,
        }}
      />
    );
    expect(screen.getByText("<<")).toBeInTheDocument();
    expect(screen.queryByText(">>")).not.toBeInTheDocument();
  });

  it("renders only next link", () => {
    render(
      <Pagination
        paginationInfo={{
          ...mockPaginationProps.paginationInfo,
          prev: null,
        }}
      />
    );
    expect(screen.getByText(">>")).toBeInTheDocument();
    expect(screen.queryByText("<<")).not.toBeInTheDocument();
  });
});
