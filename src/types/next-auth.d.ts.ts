import NextAuth from "next-auth"

declare module "next-auth" {

    interface User {
        username: string | null; //hit drna ? f prisma string? l username hit optiona thats why w  added here | null
    }
    interface Session {
        user: User & {
            username: string
        }
        token: {
            username: string
        }
    }
}