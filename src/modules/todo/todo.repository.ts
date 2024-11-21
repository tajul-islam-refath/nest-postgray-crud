import { Inject, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PG_CONNECTION } from 'src/constants';

@Injectable()
export class TodoRepository {
  constructor(@Inject(PG_CONNECTION) private db: any) {}
  async create(createTodoDto: CreateTodoDto) {
    console.log(createTodoDto);
    const { task, description, status } = createTodoDto;
    const res = await this.db.query(
      'INSERT INTO todos(task, description, status) VALUES($1,$2,$3) RETURNING *',
      [task, description, status],
    );

    console.log('create todo', res);
    return res.rows[0];
  }
}
