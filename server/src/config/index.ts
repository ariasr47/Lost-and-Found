import dotparsed from "dotenv";

const { parsed } = dotparsed.config({
  path: `.env.${process.env.NODE_ENV}`,
  debug: true,
});
interface Config {
  GOOGLE: {
    CLIENT_ID: string;
    CLIENT_SECRET: string;
  };
  SESSION: {
    SECRET: string;
  };
  DATABASE: {
    PATH: string;
  };
  PASSPORT: {
    SUCCESS_REDIRECT: string;
    FAILURE_REDIRECT: string;
  };
  MULTER: {
    DESTINATION: string;
  };
}

const config: Config = {
  GOOGLE: {
    CLIENT_ID: parsed.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: parsed.GOOGLE_CLIENT_SECRET,
  },
  SESSION: {
    SECRET: parsed.SESSION_SECRET,
  },
  DATABASE: {
    PATH: parsed.DATABASE_PATH,
  },
  PASSPORT: {
    SUCCESS_REDIRECT: parsed.SUCCESS_REDIRECT,
    FAILURE_REDIRECT: parsed.FAILURE_REDIRECT,
  },
  MULTER: {
    DESTINATION: parsed.MULTER_DESTINATION,
  },
};

export default config;
