import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ ctx, input }) => {
      const dbUser = await ctx.db.query.user.findFirst({
        where: (user, { eq }) => eq(user.name, input.name),
      });

      if (dbUser) {
        return `Hello back, ${dbUser.name}!`;
      }

      return `Hello ${input.name}!`;
    }),
});
