import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from './graphql/grapql.module';
import { SalaryModule } from './modules/salary/salary.module';
import { AppController } from './app.controller';

@Module({
  imports: [PrismaModule, GraphQLModule, SalaryModule],
  controllers: [AppController],
})
export class AppModule {}
