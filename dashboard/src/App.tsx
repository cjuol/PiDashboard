import React from 'react';
import { InfoCard } from './components/InfoCard';
import { ChartCard } from './components/ChartCard';
import { trainingStats, dietData, activityData, weatherData } from './data';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Pi Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InfoCard title="Steps" value={trainingStats.steps} />
        <InfoCard title="Calories Burned" value={trainingStats.calories} />
        <InfoCard title="Workout Duration" value={`${trainingStats.durationMinutes} min`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard title="Diet (Calories Last 7 Days)">
          <LineChart width={400} height={200} data={dietData} className="w-full">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="calories" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ChartCard>

        <ChartCard title="Daily Activity">
          <BarChart width={400} height={200} data={activityData} className="w-full">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="activeHours" fill="#82ca9d" />
          </BarChart>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {weatherData.map((w) => (
          <InfoCard key={w.city} title={w.city} value={`${w.temperature}°C - ${w.condition}`} />
        ))}
      </div>
    </div>
  );
};

export default App;
