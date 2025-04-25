import { Inject, Injectable } from "@nestjs/common";
import { Resource } from "@rekog/mcp-nest";
import { ReadResourceResult } from "../../../common/mcp/types";
import { GarminSleepDataProviderService } from "src/health-data/domain/garmin/services/garmin-sleep-data.provider.service";
import { SleepDataProviderInterface } from "src/health-data/interfaces/sleep-data.interface";

@Injectable()
export class SleepDataHandler {
    constructor(
        @Inject(GarminSleepDataProviderService) private readonly sleepDataProvider: SleepDataProviderInterface,
    ) { }

    @Resource({
        uri: 'mcp://sleep-data/latest',
        name: 'get-latest-user-sleep-data',
        description: 'Get the latest night sleep data for a user',
    })
    async getUserSleepData({ uri }: { uri: string }): Promise<ReadResourceResult> {
        const sleepData = await this.sleepDataProvider.getLatestSleepData();

        return {
            contents: [
                {
                    uri,
                    mimeType: 'application/json',
                    text: JSON.stringify(sleepData),
                }
            ]
        }
    }
}
