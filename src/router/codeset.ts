import { Hono } from "hono";
import { z } from "zod";
import countryResponse from "../mockData/codesets/countryByCode";

const codesetRoute = new Hono();

const paramsSchema = z.object({
  countryCode: z.string().max(3),
});

codesetRoute.get("/country/:countryCode", (c) => {
  const { countryCode } = paramsSchema.parse(c.req.param());

  return c.json(countryResponse);
});

export default codesetRoute;
