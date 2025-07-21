import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateApplicationDto {
  @IsString() company: string;
  @IsString() role: string;
  @IsDateString() applicationDate: string;
  @IsString() status: string;
  @IsString() description: string;
  @IsString() url: string;
  @IsOptional() @IsString() notes?: string;
}
