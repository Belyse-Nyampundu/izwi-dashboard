'use client'
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,
  Tooltip,
  Legend
);
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: Array<string>;
    backgroundColor:Array<string> ;
  }[];
}

const BarChartOne = () => {

  const [chartData, setChartData] = useState<ChartData>({
    labels: ['Job Posts'],
    datasets: [
      {
        label: 'Responses',
        data: [10, 20, 30, 40, 50, 60, 70,80,100],
        borderColor: [
            'rgb(98, 177, 158)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            
          ],
        backgroundColor: [
            'rgb(98, 177, 158)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            
          ],
      },
    ],
    
  });
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChartData({
        labels: [' ',' ',' ',' ',' '],
        datasets: [
            {
                label: 'RESPONSES',
                data: [10,20,30,40,50,60,70,80,80,100],
                borderColor: [
                    'rgb(126, 215, 194)',
                    'rgb(98, 177, 158)',
                    'rgb(200, 254, 241)',
                    'rgb(227, 230, 229)',
                    
                  ],
                backgroundColor: [
                    'rgb(126, 215, 194)',
                    'rgb(98, 177, 158)',
                    'rgb(200, 254, 241)',
                    'rgb(227, 230, 229)',
                  ],

              },
        ]
    })
   
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
            title: {
                display: true,
                text: 'Responses per job post ',
                position:'bottom',
                font: {
                  size: "20", 
                },
            
            }
        },
        scales: {
          x: {
            grid: {
              display: false, 
            },
            title: {
              display: true,
              text: 'Job category',
              position:'bottom',
          
          }
          },
          y: {
            grid: {
              display: false, 
            },
            title: {
              display: true,
              text: 'Responses ',
              position:'bottom',
          
          }
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      
    })
  }, [])
  
  return (
      <div className=' md:col-span-2 relative lg:h-[414px] w-[414px] ml-[77px]'>
        <Bar data={chartData} options={chartOptions} />
      </div>
  );
};
export default BarChartOne;

