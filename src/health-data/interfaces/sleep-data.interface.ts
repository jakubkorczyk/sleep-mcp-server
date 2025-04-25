export interface SleepData {
  startTime: Date;
  endTime: Date;
  duration: number;
  sleepScore?: number;
  deepSleepDuration?: number;
  lightSleepDuration?: number;
  remSleepDuration?: number;
  awakeTime?: number;
  sleepEfficiency?: number;
}

export interface ISleepDataProvider {
  getSleepData(startDate: Date, endDate: Date): Promise<SleepData[]>;
  getLatestSleepData(): Promise<SleepData | null>;
} 