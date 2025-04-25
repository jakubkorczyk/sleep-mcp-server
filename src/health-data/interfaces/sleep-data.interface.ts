export interface SleepDataInterface {
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

export interface SleepDataProviderInterface {
  getSleepData(startDate: Date, endDate: Date): Promise<SleepDataInterface[]>;
  getLatestSleepData(): Promise<SleepDataInterface | null>;
} 