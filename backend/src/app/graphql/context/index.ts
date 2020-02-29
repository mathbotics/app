import { PrismaClient, User } from '@prisma/client';
import { Response } from 'express';

export type Context = {
  res: Response;
  viewer: User;
  prisma: PrismaClient;
};
