import { Module } from '@nestjs/common';
import { HealthDataModule } from './health-data/health-data.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, HealthDataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
