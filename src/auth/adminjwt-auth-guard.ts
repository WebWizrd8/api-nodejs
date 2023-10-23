import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class AdminJwtAuthGuard extends AuthGuard('userjwt') {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }

  handleRequest<TUser = any>(
    err: any,
    user: any,
    // info: any,
    // context: ExecutionContext,
    // status?: any,
  ): TUser {
    if (err || !user || !user.isAdmin) {
      throw err || new UnauthorizedException();
    }

    return user;
  }
}
