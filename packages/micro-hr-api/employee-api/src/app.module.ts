import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from './graphql/grapql.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { AppController } from './app.controller';

@Module({
  imports: [PrismaModule, GraphQLModule, EmployeeModule],
  controllers: [AppController],
})
export class AppModule {}
