import 'dotenv/config';
const { DEV_PORT } = process.env;

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const port: string | undefined = DEV_PORT;

export { port };
