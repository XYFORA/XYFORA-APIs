import mongoose from "mongoose";

const URL = process.env.DATABASE_URL;

if (!URL) {

    throw new Error("Please add your MongoDB URL");

}

let cached = global.mongoose;

if (!cached) {

    cached = global.mongoose = { conn: null, promise: null };

}

export async function connectDB() {

    if (cached.conn) return cached.conn;

    if (!cached.promise) {

        cached.promise = mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((mongoose) => mongoose);

    }

    cached.conn = await cached.promise;

    return cached.conn;

};