import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORMConfig2 } from './setting/ormconfig';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: ORMConfig2,
      inject: [ConfigService],
    }),
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
