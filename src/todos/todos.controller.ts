import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoDto } from './dto/todo';
import { CreateTodoDto } from './dto/сreateTodo';
import { InsertResult } from 'typeorm';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get('/')
  getAll(@Query() query): Promise<TodoDto[]> {
    return this.todosService.getTodos(query);
  }

  @Post('/')
  create(@Body() createTodoDto: CreateTodoDto): Promise<InsertResult> {
    return this.todosService.createTodo(createTodoDto);
  }

  @Put('/:id')
  update(@Param() param, @Body() body) {
    return this.todosService.changeTodo(param.id, body);
  }

  @Delete('/:id')
  delete(@Param() param) {
    return this.todosService.deleteTodo(param.id);
  }
}
