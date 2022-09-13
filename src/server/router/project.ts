import { z } from "zod";
import { createProtectedRouter } from "./context";

// Example router with queries that can only be hit if the user requesting is signed in
export const ProjectRouter = createProtectedRouter()
  .query("getById", {
    input: {
      id: z.string(),
    },
    resolve({ ctx, input }) {
      return ctx.prisma;
    },
  })
  .query("getAllProjects", {
    resolve({ ctx }) {
      return "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.";
    },
  });
