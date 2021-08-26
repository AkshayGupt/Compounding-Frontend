import React from "react";
import ReactApexChart from "react-apexcharts";

export default class DistributedTreeMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [
            {
              x: "Mid-cap Stocks",
              y: 11,
            },
            {
              x: "Domestic Large-cap Stocks",
              y: 23,
            },
            {
              x: "International Large-cap Stocks",
              y: 17,
            },
            {
              x: "Small-cap Stocks",
              y: 6,
            },
            {
              x: "Gold",
              y: 6,
            },
            {
              x: "REIT",
              y: 5,
            },
            {
              x: "PPF, EPF, VPF",
              y: 10,
            },
            {
              x: "NSC,Bonds",
              y: 15,
            },
          ],
        },
      ],
      options: {
        legend: {
          show: false,
        },
        chart: {
          height: 350,
          type: "treemap",
        },
        title: {
          text: "Suggested Asset Allocation (in %)",
          align: "center",
        },
        colors: [
          "#3B93A5",
          "#F7B844",
          "#EC3C65",
          "#CDD7B6",
          "#D43F97",
          "#1E5D8C",
          "#421243",
          "#7F94B0",
          "#EF6537",
          "#C0ADDB",
        ],
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false,
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
          type="treemap"
          height={350}
        />
      </div>
    );
  }
}
