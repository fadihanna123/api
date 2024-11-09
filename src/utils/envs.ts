import 'dotenv/config';

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const { DEV_PORT } = process.env;
const port = DEV_PORT || 5000;

export { port };
