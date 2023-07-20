import { render, screen } from "@testing-library/react";
import { CsvButton } from "../components/CsvButton";
import { UserProvider } from "../context/user";

test("renders CsvButton component", () => {
  render(
    <UserProvider>
      <CsvButton />
    </UserProvider>
  );
  const buttonElement = screen.getByText(/Browse Files/i);
  expect(buttonElement).toBeInTheDocument();
});
