import { Strategy as JWTStrategy } from 'passport-jwt';
import nullthrows from 'nullthrows';
import passport from 'passport';

import UserHelper from '../../../graphql/objects/users/helpers/UserHelper';

const { JWT_SECRET } = process.env;

type TokenPayload = {
  id: string;
};

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ({ cookies: { jwt } }) => jwt,
      secretOrKey: nullthrows(JWT_SECRET, 'JWT_SECRET is null or undefined.'),
    },
    async ({ id }: TokenPayload, done) =>
      done(null, await UserHelper.implementation(id)),
  ),
);
passport.initialize();

export default passport;
