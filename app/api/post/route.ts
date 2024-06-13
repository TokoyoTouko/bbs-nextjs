import { PrismaClient } from "@prisma/client/extension";
import { Prisma } from "@prisma/client";

export async function GET(req: Request) {
    const prisma = new PrismaClient();
    const allBBSPosts = await prisma.post.findMany();
    return Response.json(allBBSPosts);
}