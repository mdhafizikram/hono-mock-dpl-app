import { Hono } from "hono";
import { z } from "zod";
import classResponse from "../mockData/classes/classByNumber";

const classRoute = new Hono();

const paramsSchema = z.object({
  strm: z.string().max(4),
  classByNumber: z.string().min(1).max(6),
});

classRoute.get("/:strm/:classNumber", (c) => {
  const { strm, classByNumber } = paramsSchema.parse(c.req.param());

  return c.json(classResponse);
});

export default classRoute;
