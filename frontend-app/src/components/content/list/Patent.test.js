import { fireEvent, render, screen } from "@testing-library/react";
import Patent from "./Patent";

test("It has a patentNumber, Title, TypeNumber, chemicalTypeProp", () => {
  render(
    <Patent
      patentNumber="patent 1"
      title="my title"
      typeNumber={1}
      chemicalTypeProp="My chemical type"
    />
  );
  screen.getByText(/patent 1/);
  screen.getByText(/my title/);
  screen.getByText(/type 1/);
  screen.getByText(/My chemical type/);
});
