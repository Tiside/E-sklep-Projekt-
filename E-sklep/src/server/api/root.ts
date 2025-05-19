import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { authRouter } from "@/server/api/routers/auth";
import { likeRouter } from "@/server/api/routers/likes";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  like: likeRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
