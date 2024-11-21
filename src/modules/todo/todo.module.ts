import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoRepository } from './todo.repository';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class TodoModule {}
