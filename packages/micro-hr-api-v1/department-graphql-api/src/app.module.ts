import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from './graphql/grapql.module';
import { DepartmentModule } from './modules/department/department.module';
import { AppController } from './app.controller';

@Module({
  imports: [PrismaModule, GraphQLModule, DepartmentModule],
  controllers: [AppController],
})
export class AppModule {}
