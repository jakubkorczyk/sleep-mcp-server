import { SleepDTO } from 'garmin-connect/dist/garmin/types/sleep';
import { SleepDataInterface } from '../../interfaces/sleep-data.interface';

export class SleepDataDataObject implements SleepDataInterface {
  constructor(
    public startTime: Date,
    public endTime: Date,
    public duration: number,
    public sleepScore?: number,
    public deepSleepDuration?: number,
    public lightSleepDuration?: number,
    public remSleepDuration?: number,
  ) {}

  static fromGarminSleepData(sleepData: SleepDTO): SleepDataInterface {
    return new SleepDataDataObject(
      new Date(sleepData.sleepStartTimestampGMT),
      new Date(sleepData.sleepEndTimestampGMT),
      sleepData.sleepTimeSeconds,
      sleepData.sleepScores.overall.value,
      sleepData.deepSleepSeconds,
      sleepData.lightSleepSeconds,
      sleepData.remSleepSeconds,
    );
  }
}
