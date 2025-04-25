import { Injectable } from '@nestjs/common';
import { IGarminConfig } from './interfaces/garmin-config.interface';
import { EnvLoaderService } from './services/env-loader.service';

@Injectable()
export class GarminConfigService implements IGarminConfig {
  private readonly garminConnectUsername: string;
  private readonly garminConnectPassword: string;

  constructor(private readonly envLoader: EnvLoaderService) {
    this.garminConnectUsername = this.envLoader.getEnvVariable('GARMIN_CONNECT_USERNAME');
    this.garminConnectPassword = this.envLoader.getEnvVariable('GARMIN_CONNECT_PASSWORD');
  }

  getGarminConnectUsername(): string {
    return this.garminConnectUsername;
  }

  getGarminConnectPassword(): string {
    return this.garminConnectPassword;
  }
} 