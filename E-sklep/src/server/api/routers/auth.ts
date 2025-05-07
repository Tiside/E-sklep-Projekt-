import { z } from "zod"; // walidacja
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";


const prisma = new PrismaClient();
export const authRouter = createTRPCRouter({
    register: publicProcedure
        .input(
            z.object({
                username: z.string(),
                email: z.string().email(),
                password: z.string().min(6),
            }),
        )
        .mutation(async ({ input }) => {
            const { username, email, password } = input;

            // 1. Sprawdź, czy istnieje użytkownik o takim samym emailu lub nazwie
            const existingUser = await prisma.users.findUnique({
              where: { email: "example@example.com" }
            });

            if (existingUser) {
                // 2. Jeżeli taki użytkownik istnieje, zwróć błąd
                throw new Error("Użytkownik z takim adresem e-mail lub nazwą już istnieje.");
            }

            // 3. Jeśli nie istnieje, normalnie twórz nowego użytkownika
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await prisma.users.create({
                data: {
                    name: username,
                    email,
                    password: hashedPassword,
                },
            });

            return { success: true, userId: user.id };
        }),
    login: publicProcedure
        .input(
            z.object({
                username: z.string(),
                password: z.string(),
            })
        )
        .mutation(async ({ input }) => {
            const { username, password } = input;

            // 1. Szukamy użytkownika o podanej nazwie
            const user = await prisma.users.findUnique({
                where: {
                    name: username,
                },
            });

            // 2. Jeśli nie znaleziono użytkownika, rzucamy błąd
            if (!user) {
                throw new Error("Nieprawidłowa nazwa użytkownika lub hasło.");
            }

            // 3. Sprawdzamy hasło
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                throw new Error("Nieprawidłowa nazwa użytkownika lub hasło.");
            }

            // 4. Zwracamy dane logowania — możesz tu dodać token / session etc.
            return {
                success: true,
                userId: user.id,
                username: user.name,
            };
        }),
});