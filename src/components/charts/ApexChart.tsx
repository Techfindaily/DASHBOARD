import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ApexChartProps {
  series: any[];
  categories: string[];
  height: string | number;
}

const ApexChart: React.FC<ApexChartProps> = ({ series, categories, height }) => {
  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      width: [3, 3],
      curve: 'smooth',
      dashArray: [0, 8]
    },
    markers: {
      size: [4, 6],
      strokeWidth: 2,
      fillOpacity: 1,
      strokeOpacity: 1,
    },
    xaxis: {
      categories: categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value.toLocaleString()}`
      }
    },
    grid: {
      strokeDashArray: 3,
      borderColor: '#f1f5f9',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetY: -10,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => value ? `$${value.toLocaleString()}` : ''
      }
    }
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={height}
    />
  );
};

export default ApexChart;