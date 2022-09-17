import DataTable from "Components/DataTable";
import Footer from "Components/Footer";
import NavBar from "Components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <h2>Sales</h2>
        <DataTable />
      </main>
      <Footer />
    </>
  );
}

export default App;
