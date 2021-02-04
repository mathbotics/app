import { Express } from 'express';
import cookieParser from 'cookie-parser';

import passport from './passport';
// import { logout } from '../../../graphql/mutations/logout';

export default (app: Express) => {
  app.use(cookieParser());

  app.use('/graphql', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (_err, user) => {
      req.user = user;
      next();
    })(req, res, next);
  });
};
