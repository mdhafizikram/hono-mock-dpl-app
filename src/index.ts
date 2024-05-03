import { Hono } from "hono";
import { logger } from "hono/logger";
import courseRoute from "./routes/courses";
import classRoute from "./routes/classes";
import codesetRoute from "./routes/codeset";

const app = new Hono().basePath("/api");

export const customLogger = (message: string, ...rest: string[]) => {
  console.log(message, ...rest);
};

app.use(logger(customLogger));
app.route("/course", courseRoute);
app.route("/class", classRoute);
app.route("/codeset", codesetRoute);

export default app;
