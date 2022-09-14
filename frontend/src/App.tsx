import DataTable from "Components/DataTable";
import NavBar from "Components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <h2>Sales</h2>
        <DataTable/>
      </main>
    </>
  );
}

export default App;
