import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { User } from '../../../prisma/generated/prisma/client';
import { Request } from 'express';

export const Authorized = createParamDecorator(
  (data: keyof User, cxt: ExecutionContext) => {
    const request = cxt.switchToHttp().getRequest<Request>();

    const user = request.user;

    return data ? user?.[data] : user;
  },
);
