import { Module } from '@nestjs/common';
import { GarminHealthDataModule } from './garmin/garmin-health-data.module';

@Module({
  imports: [GarminHealthDataModule],
  exports: [GarminHealthDataModule],
})
export class HealthDataModule {}
