import { getToken } from "next-auth/jwt";
import { NextApiRequest } from 'next';
import users from '@/database/users';
import connectToMongo from '@/database/connection';
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    await connectToMongo();

    console.log("Started")

    const token = await getToken({
        req: request as unknown as NextApiRequest,
        secret: process.env.NEXTAUTH_SECRET
    })

    const user = await users.findOne({ email: token?.email })

    if (!user) {
        return NextResponse.json({
            error: "User not found"
        })
    }

    try{
        return NextResponse.json({
            tokens: user.tokens
        })
    }
    catch(error){
        console.log(error)

        return NextResponse.json({
            error: "Something went wrong"
        })
    }
}