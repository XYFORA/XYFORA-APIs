import prismaConfig from "../../../../../prisma.config";
import { comparePassword } from "@/lib/bcrypt";
import { NextResponse } from "next/server";
import { signToken } from "@/lib/jwt";

export async function POST(req) {

    const { email, password } = await req.json();

    if (!email || !password) {

        return NextResponse.json({ message: "Email and password are required" }, { status: 400 });

    }

    const user = await prismaConfig.user.findUnique({ where: { email } });

    if (!user || !(await comparePassword(password, user.password))) {

        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });

    }

    return NextResponse.json({
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        token: signToken(user.id)
    });

};