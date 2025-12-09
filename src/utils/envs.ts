import { z } from 'zod';

/**
 * @author Fadi Hanna
 */

const Env = z.object({
  DEV_PORT: z.coerce.number().default(5000),
  PROD_PORT: z.coerce.number().optional(),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  USE_CORS: z.string().optional(),
  ALLOWEDOMAINS: z.string().optional(),
});

const env = Env.parse(process.env);

const port = env.NODE_ENV === 'development' ? env.DEV_PORT : env.PROD_PORT;
const allowedDomains = env.ALLOWEDOMAINS;
const serverEnv = env.NODE_ENV;
export const isCors = env.USE_CORS === 'true';

export { port, serverEnv, allowedDomains };
