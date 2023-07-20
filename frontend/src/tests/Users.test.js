import { render, screen } from "@testing-library/react";
import { User } from "../components/User";
import { UserContext, UserProvider } from "../context/user";
import { UsersList } from "../components/UsersList";

test("renders UsersList component with users data", () => {
  // Datos de ejemplo para usuarios
  const mockUsers = [
    {
      _id: "1",
      name: "User 1",
      city: "City 1",
      country: "Country 1",
      favorite_sport: "Sport 1",
    },
    {
      _id: "2",
      name: "User 2",
      city: "City 2",
      country: "Country 2",
      favorite_sport: "Sport 2",
    },
  ];

  render(
    <UserProvider>
      <UserContext.Provider value={{ users: mockUsers }}>
        <UsersList />
      </UserContext.Provider>
    </UserProvider>
  );

  // Buscar elementos por su contenido de texto
  const userElements = screen.getAllByText(/User \d/);
  expect(userElements).toHaveLength(mockUsers.length);
});

test("renders User component with user data", () => {
  const user = {
    name: "John Doe",
    city: "New York",
    country: "USA",
    favorite_sport: "Basketball",
  };
  render(<User user={user} />);
  const userNameElement = screen.getByText(/John Doe/);
  const cityElement = screen.getByText(/City: New York/);
  const countryElement = screen.getByText(/Country: USA/);
  const sportElement = screen.getByText(/Favorite Sport: Basketball/);
  expect(userNameElement).toBeInTheDocument();
  expect(cityElement).toBeInTheDocument();
  expect(countryElement).toBeInTheDocument();
  expect(sportElement).toBeInTheDocument();
});
