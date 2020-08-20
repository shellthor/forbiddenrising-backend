import { HttpException, HttpStatus } from '@nestjs/common'
import { FormQuestion } from '../question.entity'

export class InvalidQuestionException extends HttpException {
  constructor(
    question: FormQuestion,
    message?: string | Record<string, unknown>,
    error = 'Bad Request',
  ) {
    super(
      HttpException.createBody(
        {
          question,
          message: message,
        },
        error,
        HttpStatus.BAD_REQUEST,
      ),
      HttpStatus.BAD_REQUEST,
    )
  }
}
