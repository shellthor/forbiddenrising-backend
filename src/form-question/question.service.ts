import { EntityManager, EntityRepository, QueryOrder, wrap } from '@mikro-orm/core'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@mikro-orm/nestjs'
import { Form } from '../form/form.entity'
import { CreateQuestionDto, UpdateQuestionDto } from './dto'
import { choicesFields } from './enums/choice-fields.enum'
import { FieldType } from './enums/field-type.enum'
import { multipleFields } from './enums/multiple-fields.enum'
import { InvalidQuestionException } from './exceptions/bad-question.exception'
import { FormQuestion } from './question.entity'

@Injectable()
export class FormQuestionService {
  constructor(
    @InjectRepository(FormQuestion)
    private readonly formQuestionRepository: EntityRepository<FormQuestion>,
    private readonly em: EntityManager,
  ) {}

  /**
   * Creates a new question for a form.
   * @param createQuestionDto CreateQuestionDto
   */
  async create({ formId, ...dto }: CreateQuestionDto): Promise<FormQuestion> {
    const question = this.formQuestionRepository.create(dto)

    this.validateQuestion(question)

    question.form = this.em.getReference(Form, formId)

    await this.formQuestionRepository.persistAndFlush(question)

    return question
  }

  /**
   * Finds all questions for a form by its id.
   * @param id Form id
   */
  findByForm(id: number): Promise<FormQuestion[]> {
    return this.formQuestionRepository.find(
      {
        form: id,
      },
      { orderBy: { order: QueryOrder.ASC } },
    )
  }

  /**
   * Finds a question by id.
   * @param id Question UUID
   */
  findOne(id: string): Promise<FormQuestion> {
    return this.formQuestionRepository.findOneOrFail(id)
  }

  /**
   * Updates a question from a valid DTO.
   * @param updateQuestionDto UpdateQuestionDto
   */
  async update(id: string, updateQuestionDto: UpdateQuestionDto): Promise<FormQuestion> {
    const question = await this.formQuestionRepository.findOneOrFail(id)

    wrap(question).assign(updateQuestionDto)

    this.validateQuestion(question)

    await this.formQuestionRepository.flush()

    return question
  }

  /**
   * Deletes a question by id.
   * @param id Question UUID
   */
  async delete(id: string): Promise<FormQuestion> {
    const question = await this.formQuestionRepository.findOneOrFail(id)

    this.formQuestionRepository.remove(question)

    await this.formQuestionRepository.flush()

    return question
  }

  /**
   * Determines if a question's attributes are in a valid state.
   * @param question Question
   */
  private validateQuestion(question: FormQuestion): void {
    const canHaveMultiple = multipleFields.includes(question.type)
    const canHaveChoices = choicesFields.includes(question.type)

    // Fields that aren't checkbox, select, or radio cannot have choices.
    if (question.choices && !canHaveChoices) {
      throw new InvalidQuestionException(question, 'Cannot have choices.')
    }

    // All of the choice fields (checkbox, select, and radio) require choices.
    if (!question.choices && canHaveChoices) {
      throw new InvalidQuestionException(question, 'Must have choices.')
    }

    if (question.multiple && !canHaveMultiple) {
      throw new InvalidQuestionException(question, 'Cannot have multiple values.')
    }

    // Fields cannot allow multiple choices with only one choice.
    if (question.multiple && question.choices && question.choices.length <= 1) {
      throw new InvalidQuestionException(
        question,
        'Cannot have multiple values with only one choice.',
      )
    }

    // Only the upload field can have file types.
    if (question.fileTypes && question.type !== FieldType.UPLOAD) {
      throw new InvalidQuestionException(question, 'Cannot have file types.')
    }

    // The upload field must have file types.
    if (!question.fileTypes && question.type === FieldType.UPLOAD) {
      throw new InvalidQuestionException(question, 'Must set file types.')
    }
  }
}
