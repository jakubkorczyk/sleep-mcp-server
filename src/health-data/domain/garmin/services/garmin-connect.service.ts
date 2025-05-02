import { Inject, Injectable, Logger } from '@nestjs/common';
import { GarminConnect } from 'garmin-connect';
import { GarminConfigService } from 'src/config/garmin-config.service';
import { IGarminConfig } from 'src/config/interfaces/garmin-config.interface';
import { IConnectable } from 'src/health-data/interfaces/connectable.interface';

@Injectable()
export class GarminConnectService implements IConnectable<GarminConnect> {
  private readonly logger = new Logger(GarminConnectService.name);
  private connected: boolean = false;
  private client: GarminConnect | null = null;

  constructor(
    @Inject(GarminConfigService)
    private readonly garminConfig: IGarminConfig,
  ) {}

  getClient(): GarminConnect {
    if (!this.client) {
      throw new Error('GarminConnect client not initialized');
    }
    return this.client;
  }

  async connect(): Promise<GarminConnect> {
    const username = this.garminConfig.getGarminConnectUsername();
    const password = this.garminConfig.getGarminConnectPassword();

    const GCClient = new GarminConnect({
      username,
      password,
    });

    this.logger.log(`Connecting to Garmin with username: ${username}`);

    await GCClient.login();

    this.connected = true;
    this.client = GCClient;
    this.logger.log('Successfully connected to Garmin Connect');

    return GCClient;
  }

  async disconnect(): Promise<void> {
    this.connected = false;
    this.client = null;
    this.logger.log('Disconnected from Garmin Connect');
  }

  isConnected(): boolean {
    return this.connected;
  }
}
