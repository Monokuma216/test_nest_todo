import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../typeorm';
import { TodoDto } from './dto/todo';
import { CreateTodoDto } from './dto/сreateTodo';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async createTodo(createTodoDto: CreateTodoDto) {
    return await this.todoRepository.insert(createTodoDto);
  }

  async getTodos(query): Promise<TodoDto[]> {
    let where = {};
    if (query.checked) {
      where['checked'] = query.checked;
    }

    return await this.todoRepository.find({
      where,
      skip: query.skip,
      take: query.take,
    });
  }

  async changeTodo(id: number, data: TodoDto) {
    return this.todoRepository.update(id, data);
  }

  async deleteTodo(id: number) {
    return this.todoRepository.delete(id);
  }
}
