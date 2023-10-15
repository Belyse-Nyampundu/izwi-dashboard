'use client'
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
import jobCategory from "@/app/hooks/useJobCategory";

interface ChartData {labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: Array<string>;
    backgroundColor:Array<string> ;
  }[];
}

const BarChartTwo = () => {
  const { jobCategories,fetchedJobCategory} = jobCategory()
  const [chartData, setChartData] = useState<ChartData>({
    labels: ["Job Posts"],
    datasets: [
      {
        label: "Responses",
        
        data: [],
        borderColor: [
          "rgb(, 177, 158)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        backgroundColor: [
          "rgb(98, 177, 158)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
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
          label: "",
          data: [10,20,30,40,50,60,70,80,80,100],
          borderColor: [
            "(126, 215, 194)",
            "rgb(98, 177, 158)",
            "rgb(200, 254, 241)",
            "rgb(227, 230, 229)",
          ],
          backgroundColor: [
            "rgb(126, 215, 194)",
            "rgb(98, 177, 158)",
            "rgb(200, 254, 241)",
            "rgb(227, 230, 229)",
          ],
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
        position: "top",
        baccolor:'none',
        display:false,
        },
        title: {
          display: true,
          text: "Job posts per category",
          position: "bottom",
          font: {
            size: "20", 
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: 'Job category ',
            position:'bottom',
        
        }
        },
        y: {
          grid: {
            display: false, 
          },
          title: {
            display: true,
            text: 'Job posts',
            position:'bottom',
        
        }
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <div className="md:col-span-2 relative lg:h-[414px] w-[414px] m-1 p-1 mr-[742px] ">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChartTwo;


