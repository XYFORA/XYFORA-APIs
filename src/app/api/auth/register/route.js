import { hashPassword } from "@/src/lib/bcrypt";
import { connectDB } from "@/src/lib/db";
import { signToken } from "@/src/lib/jwt";
import User from "@/src/models/User";

export async function POST(request) {

    try {

        await connectDB();

        const { fullname, email, password } = await request.json();

        if (!fullname || !email || !password) {

            return Response.json({ message: "All fields are required" }, { status: 400 });

        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return Response.json({ message: "User already exists" }, { status: 400 });

        }

        const hashed = await hashPassword(password);

        const user = await User.create({
            fullname,
            email,
            password: hashed
        });

        const token = signToken(user._id.toString());

        return Response.json({
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            token
        });

    } catch (error) {

        console.error(error);

        return Response.json({ message: "Server error" }, { status: 500 });

    }

};