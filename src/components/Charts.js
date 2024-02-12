import React from "react";
import { PieChart,Pie,Tooltip,Bar,BarChart } from "recharts";

export const Charts = () => {

  const data = [
    {name: 'A', value:50},
    {name: 'B', value:50},
    {name: 'C', value:50},
    {name: 'D', value:50},
    {name: 'E', value:50},
  ]
  const dataBar = [
    {
      name: 'Page A',
      uv: 4000,
      
    },
    {
      name: 'Page B',
      uv: 3000,
    },
    {
      name: 'Page C',
      uv: 2000,
    },
    {
      name: 'Page D',
      uv: 2780,
    },
    {
      name: 'Page E',
      uv: 1890,
    },
    {
      name: 'Page F',
      uv: 2390,
    },
    {
      name: 'Page G',
      uv: 3490,
    },
  ];
  

  return (
    <>
      <div class="max-w-md mx-auto mt-6">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <div class="mb-4">
            <label
              for="assignedTo"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Assigned to
            </label>
            <select
              id="assignedTo"
              name="assignedTo"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="option1">Jonathan Campos</option>
              <option value="option2">Juan Campos</option>
              <option value="option3">Antonio Campos</option>
            </select>
          </div>
          <div class="mb-4">
            <label
              for="dueDate"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div class="mb-4">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Process
            </button>
          </div>
        </form>

        <div className="charts-container flex justify-center items-center mt-5">
        <PieChart width={400} height={200}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>

        <BarChart width={250} height={200} data={dataBar}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
        </div>
        
      </div>
    </>
  );
};
