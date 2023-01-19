import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config();

export const ORMConfig2 = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: +configService.get<number>('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [`${__dirname}/../typeorm/*.entity.{ts,js}`],
    synchronize: true,
  };
};

export const ORMConfig = {
  type: 'postgres',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  schema: 'public',
  logging: 'all',
  entities: [`${__dirname}/../typeorm/*.entity.{ts,js}`],
  synchronize: true,
  retryDelay: 3000,
  maxQueryExecutionTime: 3000,
} as PostgresConnectionOptions;

export default new DataSource(ORMConfig);
