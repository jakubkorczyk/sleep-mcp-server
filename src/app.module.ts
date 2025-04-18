import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthDataModule } from './health-data/health-data.module';

@Module({
  imports: [HealthDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
