import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AllResponseInterceptor } from './all-response.interceptor';
import { AnyExceptionFilter } from './any-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new AllResponseInterceptor()); // 使用自定义的全局拦截器对数据做处理
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AnyExceptionFilter()); // 对服务器端的异常操作做同一处理
  app.use(cookieParser()); // 使用cookie格式化插件
  app.enableCors({ origin: true, credentials: true }); // 允许跨域和传递cookie
  // https://docs.nestjs.com/openapi/introduction 配置接口文档
  const config = new DocumentBuilder()
    .setTitle('我的接口文档')
    .setDescription('这个接口文档我是自动生成的')
    .setVersion('1.0.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // 访问文档的时候直接访问/api
  await app.listen(3000);
}
bootstrap();

// https://docs.nestjs.com/recipes/prisma prisma数据库的使用说明
