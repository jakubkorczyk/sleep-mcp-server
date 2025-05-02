import { Module } from '@nestjs/common';
import { HealthDataModule } from './health-data/health-data.module';
import { ConfigModule } from './config/config.module';
import { McpModule } from '@rekog/mcp-nest';

@Module({
  imports: [
    McpModule.forRoot({
      name: 'sleep-data-service',
      version: '1.0.0',
    }),
    ConfigModule,
    HealthDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
