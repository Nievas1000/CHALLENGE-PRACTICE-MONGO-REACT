import { render, screen } from "@testing-library/react";
import { ErrorCard } from "../components/ErrorCard";
import { UserProvider } from "../context/user";

test("renders ErrorCard component with given message", () => {
  const errorMessage = "This is an error message";
  render(
    <UserProvider>
      <ErrorCard message={errorMessage} />
    </UserProvider>
  );
  const errorMessageElement = screen.getByText(errorMessage);
  expect(errorMessageElement).toBeInTheDocument();
});
