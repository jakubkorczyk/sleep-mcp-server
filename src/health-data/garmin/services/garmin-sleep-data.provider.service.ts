import { Inject, Injectable, Logger } from '@nestjs/common';
import { GarminConnectService } from './garmin-connect.service';
import { ISleepDataProvider, SleepData } from 'src/health-data/interfaces/sleep-data.interface';
import { IConnectable } from 'src/health-data/interfaces/connectable.interface';
import { GarminConnect } from 'garmin-connect';

@Injectable()
export class GarminSleepDataProviderService implements ISleepDataProvider {
    private readonly logger = new Logger(GarminSleepDataProviderService.name);

    constructor(
        @Inject(GarminConnectService)
        private readonly garminConnect: IConnectable<GarminConnect>
    ) { }

    async getSleepData(startDate: Date, endDate: Date): Promise<SleepData[]> {
        if (!this.garminConnect.isConnected()) {
            await this.garminConnect.connect()
        }
        this.logger.log(`Fetching sleep data from ${startDate.toISOString()} to ${endDate.toISOString()}`);
        return [];
    }

    async getLatestSleepData(): Promise<SleepData | null> {
        if (!this.garminConnect.isConnected()) {
            await this.garminConnect.connect()
        }
        this.logger.log('Fetching latest sleep data');
        return null;
    }
} 