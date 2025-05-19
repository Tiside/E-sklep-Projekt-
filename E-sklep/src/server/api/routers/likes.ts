import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";

export const likeRouter = createTRPCRouter({
    toggleLike: protectedProcedure
        .input(z.object({ productId: z.number() }))
        .mutation(async ({ ctx, input }) => {
            const userId = ctx.session.user.id;

            const existing = await ctx.db.likes.findUnique({
                where: {
                    userId_productId: {
                        userId,
                        productId: input.productId,
                    },
                },
            });

            if (existing) {
                await ctx.db.likes.delete({
                    where: { id: existing.id },
                });
                return { liked: false };
            } else {
                await ctx.db.likes.create({
                    data: {
                        userId,
                        productId: input.productId,
                    },
                });
                return { liked: true };
            }
        }),

    getLikedProductIds: protectedProcedure.query(async ({ ctx }) => {
        const likes = await ctx.db.likes.findMany({
            where: { userId: ctx.session.user.id },
            select: { productId: true },
        });

        return likes.map((like) => like.productId);
    }),

    getLikeCount: publicProcedure
        .input(z.object({ productId: z.number() }))
        .query(async ({ ctx, input }) => {
            const count = await ctx.db.likes.count({
                where: { productId: input.productId },
            });

            return { count };
        }),
});
