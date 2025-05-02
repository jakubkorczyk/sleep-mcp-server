import { Inject, Injectable, Logger } from '@nestjs/common';
import { GarminConnectService } from './garmin-connect.service';
import {
  SleepDataProviderInterface,
  SleepDataInterface,
} from 'src/health-data/interfaces/sleep-data.interface';
import { IConnectable } from 'src/health-data/interfaces/connectable.interface';
import { GarminConnect } from 'garmin-connect';
import { SleepDataDataObject } from 'src/health-data/domain/data-objects/sleep-data.data.object';

@Injectable()
export class GarminSleepDataProviderService
  implements SleepDataProviderInterface
{
  private readonly logger = new Logger(GarminSleepDataProviderService.name);

  constructor(
    @Inject(GarminConnectService)
    private readonly garminConnect: IConnectable<GarminConnect>,
  ) {}

  async getSleepData(
    startDate: Date,
    endDate: Date,
  ): Promise<SleepDataInterface[]> {
    if (!this.garminConnect.isConnected()) {
      await this.garminConnect.connect();
    }
    this.logger.log(
      `Fetching sleep data from ${startDate.toISOString()} to ${endDate.toISOString()}`,
    );
    return [];
  }

  async getLatestSleepData(): Promise<SleepDataInterface | null> {
    if (!this.garminConnect.isConnected()) {
      await this.garminConnect.connect();
    }
    this.logger.log('Fetching latest sleep data');
    const client = this.garminConnect.getClient();
    const garminSleepData = await client.getSleepData();

    return SleepDataDataObject.fromGarminSleepData(
      garminSleepData.dailySleepDTO,
    );
  }
}
