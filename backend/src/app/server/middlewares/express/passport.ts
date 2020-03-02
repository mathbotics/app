import { Strategy as JWTStrategy } from 'passport-jwt';
import nullthrows from 'nullthrows';
import passport from 'passport';

import prisma from '../../../data/prisma';

const { JWT_SECRET } = process.env;

type TokenPayload = {
  username: string;
};

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ({ cookies: { jwt } }) => jwt,
      secretOrKey: nullthrows(JWT_SECRET, 'JWT_SECRET is null or undefined.'),
    },
    async ({ username }: TokenPayload, done) =>
      done(null, await prisma.user.findOne({ where: { username } })),
  ),
);
passport.initialize();

export default passport;
