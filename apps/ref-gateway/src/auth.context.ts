import { UnauthorizedException } from '@nestjs/common';

export const authContext = ({ req }) => {
  if (req.headers?.authorization) {
    // Validate JWT
    return { user: { id: '123' } };
  }
  throw new UnauthorizedException();
};
