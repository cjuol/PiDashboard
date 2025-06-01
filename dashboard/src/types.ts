export interface TrainingStats {
  steps: number;
  calories: number;
  durationMinutes: number;
}

export interface DietDataPoint {
  date: string;
  calories: number;
}

export interface ActivityDataPoint {
  hour: string;
  activeHours: number;
}

export interface WeatherInfo {
  city: string;
  temperature: number;
  condition: string;
}
