import { IsUUID } from 'class-validator';

export class FindQuestionDto {
  @IsUUID()
  id: string;
}
