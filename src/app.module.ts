import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { BooksModule } from './books/books.module';
import { MoviesModule } from './movies/movies.module';
import { PrismaService } from './prisma/prisma.service';
import { ValidateLoginMiddleware } from './validate-login.middleware';

@Module({
  imports: [BooksModule, MoviesModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateLoginMiddleware).forRoutes(...['movies']); // 指定使用登陆验证中间件的路由
  }
}
