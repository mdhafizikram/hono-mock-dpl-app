import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { routes } from './router/router';

const app = new Hono().basePath('/api');
const { codesetRoute, courseRoute, classRoute } = routes;

export const customLogger = (message: string, ...rest: string[]) => {
  console.log(message, ...rest);
};

app.use(logger(customLogger));
app.get('/', (c) => c.text('Welcome to DPL mock application'));
app.route('/course', courseRoute);
app.route('/class', classRoute);
app.route('/codeset', codesetRoute);

export default app;
