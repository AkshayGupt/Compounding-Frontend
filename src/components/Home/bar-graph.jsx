import React from "react";
import ReactApexChart from "react-apexcharts";

const colors = [
  "#2F847C",
  "#C32148",
  "#1F75FE",
  "#967FE5",
  "#ED6345",
  "#556B2F",
  "#8C92AC",
  "#FA8072",
];

const clients = [
  "You",
  "Akshay",
  "Dheeraj",
  "Varun",
  "Shivam",
  "Gourav",
  "Roberts",
];

class BarGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [29, 56, 20, 54, 64, 54, 39],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        colors: colors,
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        title: {
          text: "Leaderboard",
          align: "center",
        },
        xaxis: {
          categories: clients,
          labels: {
            style: {
              colors: colors,
              fontSize: "12px",
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default BarGraph;
