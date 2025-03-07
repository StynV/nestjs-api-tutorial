import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const GetUser = createParamDecorator(
  (
    data: string | undefined,
    ctx: ExecutionContext,
  ) => {
    const request = ctx
      .switchToHttp()
      .getRequest();

    if (!request.user) {
      throw new Error(
        'User not found in request',
      );
    }

    if (data) {
      return request.user[data];
    }

    return request.user;
  },
);
