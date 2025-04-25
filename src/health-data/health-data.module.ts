import { Module } from '@nestjs/common';
import { GarminHealthDataModule } from './domain/garmin/garmin-health-data.module';
import { SleepDataHandler } from './app/mcp/sleep-data.handler';

@Module({
  imports: [GarminHealthDataModule],
  providers: [SleepDataHandler],
  exports: [GarminHealthDataModule],
})
export class HealthDataModule { }
