import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface MiniChartProps {
  data: number[];
  color: string;
}

const MiniChart: React.FC<MiniChartProps> = ({ data, color }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        // Destroy existing chart
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.map((_, i) => i),
            datasets: [{
              data: data,
              borderColor: color,
              backgroundColor: color + '20',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false }
            },
            scales: {
              x: { display: false },
              y: { display: false }
            },
            elements: {
              point: { radius: 0 }
            }
          }
        });
      }
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, color]);

  return <canvas ref={canvasRef} />;
};

export default MiniChart;