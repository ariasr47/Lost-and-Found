import { config } from "dotenv";

const env = config({
  path: `.env.${process.env.NODE_ENV}`,
  debug: true,
});

console.log(env);

interface Keys {
  google: {
    clientId: string;
    clientSecret: string;
  };
  session: {
    cookieKey: string;
  };
}

const keys: Keys = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  session: {
    cookieKey: process.env.SESSION_COOKIE_KEY,
  },
};

export default keys;
