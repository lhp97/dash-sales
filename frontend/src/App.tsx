import BarChart from "Components/BarChart";
import DataTable from "Components/DataTable";
import DonutChart from "Components/DonutChart";
import Footer from "Components/Footer";
import NavBar from "Components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <h1 className="py-3">Dashboard Sales</h1>
        <div className="row px-3 py-2">
          <div className="col-sm-6">
            <h4>Success rate</h4>
            <BarChart/>
          </div>
          <div className="col-sm-6">
            <h4>All Sales</h4>
            <DonutChart/>
          </div>
        </div>
        <DataTable />
      </main>
      <Footer />
    </>
  );
}

export default App;
