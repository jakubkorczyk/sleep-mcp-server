import { Module } from '@nestjs/common';
import { EnvLoaderService } from './services/env-loader.service';
import { GarminConfigService } from './garmin-config.service';

@Module({
  providers: [GarminConfigService, EnvLoaderService],
  exports: [GarminConfigService],
})
export class ConfigModule {} 