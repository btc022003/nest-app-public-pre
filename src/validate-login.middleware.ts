import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ValidateLoginMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.cookies.token) {
      next();
    } else {
      // cookie中没有token的时候直接抛出异常
      throw new UnauthorizedException();
    }
    // next();
  }
}
