import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { buildVCard } from "@/lib/buildVCard";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
        return new Response("Unauthorized", { status: 401 });
    }   

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: { links: true },
    });
    if (!user) {
        return new Response("User not found", { status: 404 });
    }

    const vcard = buildVCard({ user, links: user.links });
    return new Response(vcard, {
        headers: {
            "Content-Type": "text/vcard",
            "Content-Disposition": `attachment; filename="${user.name}_profile.vcf"`,
        },
    }); 

}