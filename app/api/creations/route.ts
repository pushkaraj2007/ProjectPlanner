import users from '@/database/users';
import connectToMongo from '@/database/connection';
import { getToken } from 'next-auth/jwt';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    await connectToMongo();

    console.log("Started")

    const token = await getToken({
        req: request as unknown as NextApiRequest,
        secret: process.env.NEXTAUTH_SECRET
    });

    const user = await users.findOne({ email: token?.email })
    console.log(user)

    if (!user) {
        return NextResponse.json({
            error: "User not found"
        })
    }

    try{
        const creations = user.creations

        console.log(creations)

        return NextResponse.json({
            creations: creations
        })
    }
    catch(error){
        console.log(error)

        return NextResponse.json({
            error: "Server error"
        })
    }

}