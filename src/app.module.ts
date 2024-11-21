import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { DbModule } from './modules/db/db.module';

@Module({
  imports: [TodoModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
