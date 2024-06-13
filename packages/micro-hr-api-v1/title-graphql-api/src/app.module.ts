import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from './graphql/grapql.module';
import { TitleModule } from './modules/title/title.module';
import { AppController } from './app.controller';

@Module({
  imports: [PrismaModule, GraphQLModule, TitleModule],
  controllers: [AppController],
})
export class AppModule {}
