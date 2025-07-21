import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateCVPrompt } from './prompts/cv.helper.prompt';
import axios from 'axios';

interface OllamaResponse {
  response: string;
  done: boolean;
}

@Injectable()
export class AiService {
  constructor(private prisma: PrismaService) {}

  async generateCvForApplication(id: string): Promise<string> {
    const application = await this.prisma.application.findUnique({
      where: { id },
    });

    if (!application) throw new NotFoundException('Postulación no encontrada');

    const prompt = generateCVPrompt(application);

    const response = await axios.post<OllamaResponse>(
      process.env.OLLAMA_API_URL || 'http://localhost:11434/api/generate',
      {
        model: 'gemma3:4b',
        prompt,
        stream: false,
      },
      {
        timeout: 60000,
      },
    );

    return response.data.response;
  }
}
