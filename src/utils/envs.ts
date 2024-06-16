import 'dotenv/config';
const { DEV_PORT, PROD_PORT } = process.env;

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const port: string | undefined =
  process.env.NODE_ENV === 'development'
    ? DEV_PORT
    : process.env.NODE_ENV === 'production'
      ? PROD_PORT
      : undefined;

export { port };
