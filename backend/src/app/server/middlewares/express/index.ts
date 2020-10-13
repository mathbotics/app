import { Express } from 'express';
import cookieParser from 'cookie-parser';

import passport from './passport';

export default (app: Express) => {
  app.use(cookieParser());
  app.use('/graphql', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (_err, user) => {
      req.user = user;
      next();
    })(req, res, next);
  });
  app.get("/logout",(req, res) => {
    req.logout();
    //res.redirect('/login')
  })
};
