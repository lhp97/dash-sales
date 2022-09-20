import Chart from "react-apexcharts";

const BarChart = () => {
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  const mockData = {
    labels: {
      categories: ["Catatau", "Jhonny Bravo", "Mandachuva", "Coragem", "Tom"],
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.2, 65.3, 81, 34, 70],
      },
    ],
  };

  return (
    <Chart
      options={{ ...options, xaxis: mockData.labels }}
      series={mockData.series}
      type="bar"
      height={240}
    />
  );
};

export default BarChart;
