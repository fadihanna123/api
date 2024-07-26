import 'dotenv/config';
const { DEV_PORT } = process.env;

/**
 * @author Fadi Hanna<fhanna181@gmail.com>
 */

const port = DEV_PORT || 5000;

export { port };
