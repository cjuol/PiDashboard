import { TrainingStats, DietDataPoint, ActivityDataPoint, WeatherInfo } from './types';

export const trainingStats: TrainingStats = {
  steps: 12000,
  calories: 500,
  durationMinutes: 75,
};

export const dietData: DietDataPoint[] = [
  { date: 'Day 1', calories: 2200 },
  { date: 'Day 2', calories: 2100 },
  { date: 'Day 3', calories: 2000 },
  { date: 'Day 4', calories: 2300 },
  { date: 'Day 5', calories: 1950 },
  { date: 'Day 6', calories: 2150 },
  { date: 'Day 7', calories: 2050 },
];

export const activityData: ActivityDataPoint[] = [
  { hour: '6 AM', activeHours: 1 },
  { hour: '9 AM', activeHours: 2 },
  { hour: '12 PM', activeHours: 1 },
  { hour: '3 PM', activeHours: 2 },
  { hour: '6 PM', activeHours: 3 },
  { hour: '9 PM', activeHours: 1 },
];

export const weatherData: WeatherInfo[] = [
  { city: 'Córdoba', temperature: 22, condition: 'Sunny' },
  { city: 'Lucena', temperature: 21, condition: 'Partly Cloudy' },
  { city: 'Savigliano', temperature: 18, condition: 'Rainy' },
];
