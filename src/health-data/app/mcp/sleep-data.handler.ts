import { Inject, Injectable } from '@nestjs/common';
import { Context, Resource, Tool } from '@rekog/mcp-nest';
import { ReadResourceResult, ReadToolResult } from '../../../common/mcp/types';
import { GarminSleepDataProviderService } from 'src/health-data/domain/garmin/services/garmin-sleep-data.provider.service';
import { SleepDataProviderInterface } from 'src/health-data/interfaces/sleep-data.interface';

@Injectable()
export class SleepDataHandler {
  constructor(
    @Inject(GarminSleepDataProviderService)
    private readonly sleepDataProvider: SleepDataProviderInterface,
  ) {}

  @Tool({
    name: 'get-latest-user-sleep-data',
    description: 'Get the latest night sleep data for a user',
  })
  async getLatestUserSleepData({}, context: Context): Promise<ReadToolResult> {
    const sleepData = await this.sleepDataProvider.getLatestSleepData();

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(sleepData),
        },
      ],
    };
  }

  @Resource({
    uri: 'mcp://sleep-data/latest',
    name: 'get-latest-user-sleep-data',
    description: 'Get the latest night sleep data for a user',
  })
  async getUserSleepData({
    uri,
  }: {
    uri: string;
  }): Promise<ReadResourceResult> {
    const sleepData = await this.sleepDataProvider.getLatestSleepData();

    return {
      contents: [
        {
          uri,
          mimeType: 'text/plain',
          text: JSON.stringify(sleepData),
        },
      ],
    };
  }
}
