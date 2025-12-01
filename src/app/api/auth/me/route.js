import prismaConfig from "../../../../../prisma.config";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(req) {

    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {

        return NextResponse.json({ message: "Missing token" }, { status: 401 });

    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = verifyToken(token);

        if (!decoded || !decoded.id) {

            return NextResponse.json({ message: "Invalid token payload" }, { status: 401 });

        }

        const user = await prismaConfig.user.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                fullname: true,
                email: true
            }
        });

        if (!user) {

            return NextResponse.json({ message: "User not found" }, { status: 404 });

        }

        return NextResponse.json(user);

    } catch (error) {

        console.error("Auth Check Error:", error);

        return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });

    }

};