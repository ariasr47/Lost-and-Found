import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import config from "./config";
import { UserModel } from "./models";

declare global {
  namespace Express {
    interface User {
      id: number;
      googleId: string;
      name: string;
      email: string;
    }
  }
}

passport.use(
  new Strategy(
    {
      clientID: config.GOOGLE.CLIENT_ID,
      clientSecret: config.GOOGLE.CLIENT_SECRET,
      callbackURL: "/auth/accepted",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await UserModel.findOne({ where: { googleId: profile.id } });
        if (!user) {
          user = await UserModel.create({
            googleId: profile.id,
            name: profile._json.name,
            email: profile._json.email,
          });
        }
        return done(null, user);
      } catch (error) {
        console.error(error);
        return done(error);
      }
    }
  )
);

passport.serializeUser((user: Express.User, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done) => {
  UserModel.findOne({ where: { id: id } })
    .then((user: Express.User) => {
      done(null, user);
    })
    .catch((err: Error) => {
      done(err);
    });
});

export default passport;
