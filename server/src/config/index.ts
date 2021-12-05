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
    CLIENT_ID: process.env.CLIENT_GOOGLE_CLIENT_ID,
    CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  SESSION: {
    SECRET: process.env.SESSION_SECRET,
  },
  DATABASE: {
    PATH: process.env.DATABASE_PATH,
  },
  PASSPORT: {
    SUCCESS_REDIRECT: process.env.SUCCESS_REDIRECT,
    FAILURE_REDIRECT: process.env.FAILURE_REDIRECT,
  },
  MULTER: {
    DESTINATION: process.env.MULTER_DESTINATION,
  },
};

export default config;
