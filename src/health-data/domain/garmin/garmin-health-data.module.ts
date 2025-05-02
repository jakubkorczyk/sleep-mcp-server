import { Module } from '@nestjs/common';
import { ConfigModule } from '../../../config/config.module';
import { GarminConnectService } from './services/garmin-connect.service';
import { GarminSleepDataProviderService } from './services/garmin-sleep-data.provider.service';

@Module({
  imports: [ConfigModule],
  providers: [GarminConnectService, GarminSleepDataProviderService],
  exports: [GarminConnectService, GarminSleepDataProviderService],
})
export class GarminHealthDataModule {}
