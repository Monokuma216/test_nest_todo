import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosService } from './todos.service';
import { Todo } from '../typeorm';
import { TodosController } from './todos.controller';

@Module({
  providers: [TodosService],
  controllers: [TodosController],
  imports: [TypeOrmModule.forFeature([Todo])],
})
export class TodosModule {}
