import { render, screen, fireEvent } from "@testing-library/react";
import { UserProvider, UserContext } from "../context/user";
import { NavBar } from "../components/NavBar";

test("updates the query value when typing in the input", () => {
  const mockSetQuery = jest.fn();
  render(
    <UserProvider>
      <UserContext.Provider value={{ setQuery: mockSetQuery }}>
        <NavBar />
      </UserContext.Provider>
    </UserProvider>
  );
  const inputElement = screen.getByPlaceholderText(
    /Jhon, London, Basketball.../
  );
  fireEvent.change(inputElement, { target: { value: "search term" } });
  expect(mockSetQuery).toHaveBeenCalledWith("search term");
});
