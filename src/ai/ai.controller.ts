import { Controller, Param, Post } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('cv-helper/:id')
  async generateCv(@Param('id') id: string) {
    const result = await this.aiService.generateCvForApplication(id);
    return { generateCv: result };
  }
}
