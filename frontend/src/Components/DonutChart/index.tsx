import Chart from "react-apexcharts";

const DonutChart = () => {
  const options = {
    legend: {
      show: true
    },
  }

  const mockData = {
    labels: ["Catatau", "Jhonny Bravo", "Mandachuva", "Coragem", "Tom"],
    series: [43.2, 65.3, 81, 34, 70]
  };

  return (
    <Chart
      options={{ ...options, labels: mockData.labels }}
      series={mockData.series}
      type="donut"
      height={240}
    />
  );
};

export default DonutChart;
