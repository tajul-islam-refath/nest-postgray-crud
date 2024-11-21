import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    description: 'Task of this todo',
    example: 'Todo project',
  })
  task: string;

  @ApiProperty({
    description: 'About todo project',
    example: 'Nest js and postgraysql todo project',
  })
  description: string;

  @ApiProperty({
    description: 'Status of this todo',
    example: 'Pending',
  })
  status: string;
}
