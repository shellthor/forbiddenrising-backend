import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { FieldType } from '../../form-question/enums/field-type.enum'
import { FormQuestion } from '../../form-question/question.entity'
import { FormQuestionService } from '../../form-question/question.service'
import { CreateFormSubmissionDto } from '../dto'

@Injectable()
export class CreateSubmissionPipe implements PipeTransform {
  constructor(private readonly questionService: FormQuestionService) {}

  async transform(
    createSubmissionDto: CreateFormSubmissionDto,
    metadata: ArgumentMetadata,
  ): Promise<CreateFormSubmissionDto> {
    const { formId, answers } = createSubmissionDto
    const questions = await this.questionService.findByForm(formId)

    if (!this.toValidate(metadata)) {
      return createSubmissionDto
    }

    // Unintelligent check. Should check if we have a Record<UUID, string | boolean | string[]>.
    if (typeof answers !== 'object') {
      throw new BadRequestException('Form answers should be presented as a record.')
    }

    if (!questions || !questions.length || !answers || !Object.keys(answers).length) {
      throw new BadRequestException('No data to submit.')
    }

    for (const question of questions) {
      // Ignore removed questions and file uploads.
      if (question.deleted || question.type === FieldType.UPLOAD) continue

      // Answers is missing a required question.
      if (question.required && !answers[question.id]) {
        throw new BadRequestException(`Question [${question.id}] is required.`)
      }

      // An empty optional field will be null.
      if (!question.required && !answers[question.id]) continue

      this.validateAnswer(question, answers[question.id])
    }

    return createSubmissionDto
  }

  /**
   * Determines the validity of the answer to a question.
   * Multiple fields only apply when there are choices or file uploads (not here).
   * TODO: Invesigate a dynamic schema validation library. Possibly store with questions?
   *
   * Textarea, Textinput, Radio: String
   * Checkbox: Boolean, String[]
   * Select: String, String[]
   * FileInput: File, File[] (not present in answer data)
   *
   * Choices: Checkbox, Select, Radio
   * Multiple: Checkbox, Select, FileInput
   *
   * @param question
   * @param answer
   */
  private validateAnswer(
    { id, type, choices, multiple }: FormQuestion,
    answer: string | boolean | string[],
  ): void {
    // Textarea, Textinputs, and Radio Buttons can only return strings.
    if (
      (type === FieldType.TEXTAREA || type === FieldType.TEXTINPUT || type === FieldType.RADIO) &&
      typeof answer !== 'string'
    ) {
      throw new BadRequestException({
        type,
        id,
        error: 'Expected string answer.',
      })
    }

    // Mutliple is a hard limit on the number of allowable answers.
    if (multiple && Array.isArray(answer) && answer.length > multiple) {
      throw new BadRequestException(`Only ${multiple} answers are allowed.`)
    }

    // Single checkboxes without multiple choices are boolean.
    if (type === FieldType.CHECKBOX && !Array.isArray(choices) && typeof answer !== 'boolean') {
      throw new BadRequestException({
        type,
        id,
        error: 'Expected boolean answer.',
      })
    }

    // Selects without multiple selectable options should return a string.
    if (type === FieldType.SELECT && !multiple && typeof answer !== 'string') {
      throw new BadRequestException({
        type,
        id,
        error: 'Expected string answer.',
      })
    }

    // Check if Checkbox and Select multiple values are valid.
    if ((type === FieldType.CHECKBOX || type === FieldType.SELECT) && multiple) {
      if (!(Array.isArray(answer) && answer.every(v => typeof v === 'string'))) {
        throw new BadRequestException({
          type,
          id,
          error: `Array of strings expected.`,
        })
      }

      const values = [...choices]

      for (let i = 0; i < answer.length; i++) {
        const index = values.indexOf(answer[i])

        if (index < 0) {
          throw new BadRequestException({
            type,
            id,
            error: `${answer[i]} is an invalid choice or illegal duplicate.`,
          })
        }

        values.splice(index, 1)
      }
    }

    // Checkboxes with only one choice are boolean toggles.
    if (type === FieldType.CHECKBOX && choices.length === 1 && typeof answer !== 'boolean') {
      throw new BadRequestException({ type, id, error: `Expected boolean.` })
    }

    // Radios and Selects without multiple values should return a single, valid choice.
    if (type === FieldType.RADIO || (type === FieldType.SELECT && !multiple)) {
      if (Array.isArray(answer) || typeof answer !== 'string' || !choices.includes(answer)) {
        throw new BadRequestException({
          type,
          id,
          error: `'${answer}' is not a valid choice.`,
        })
      }
    }
  }

  /**
   * Only validate the body of the update request.
   * @param metadata ArgumentMetadata
   */
  private toValidate(metadata: ArgumentMetadata): boolean {
    return metadata.type === 'body'
  }
}
