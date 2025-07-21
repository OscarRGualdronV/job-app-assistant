import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationsModule } from './applications/applications.module';
import { PrismaModule } from './prisma/prisma.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [ApplicationsModule, PrismaModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
