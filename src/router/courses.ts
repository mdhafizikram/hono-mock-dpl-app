import { Hono } from "hono";
import { z } from "zod";
import courseResponse from "../mockData/courses/courseById";

const course = new Hono();

const paramsSchema = z.object({
  strm: z.string().max(4),
  courseId: z.string().min(1).max(10),
});

course.get("/:strm/:courseId", (c) => {
  const { strm, courseId } = paramsSchema.parse(c.req.param());

  return c.json(courseResponse);
});

export default course;
