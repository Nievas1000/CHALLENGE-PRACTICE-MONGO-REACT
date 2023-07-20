import { CsvButton } from "./components/CsvButton";
import { NavBar } from "./components/NavBar";
import { UsersList } from "./components/UsersList";
import { ErrorCard } from "./components/ErrorCard";
import { useError } from "./hooks/useError";

function App() {
  const { error, showError } = useError();

  return (
    <div>
      <NavBar />
      <CsvButton />
      <UsersList />
      {showError && <ErrorCard message={error} />}
    </div>
  );
}

export default App;
