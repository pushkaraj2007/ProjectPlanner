import { getToken } from "next-auth/jwt";
import { NextApiRequest } from 'next';
import tokenCoupons from "@/database/tokenCoupons";
import users from "@/database/users";
import connectToMongo from '@/database/connection';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    await connectToMongo();

    const { tokenCoupon } = await request.json()

    const token = await getToken({
        req: request as unknown as NextApiRequest,
        secret: process.env.NEXTAUTH_SECRET
    })

    if (!token) {
        return NextResponse.json({
            error: "User not found"
        })
    }

    const fetchedUser = await users.findOne({ email: token?.email })

    if (!fetchedUser) {
        return NextResponse.json({
            error: "User not found"
        })
    }

    const fetchedCoupon = await tokenCoupons.findOne({ tokenCoupon: tokenCoupon })

    if (!fetchedCoupon) {
        return NextResponse.json({
            error: "Coupon not found"
        })
    }

    fetchedUser.tokens = fetchedUser.tokens + fetchedCoupon.tokensToAdd
    fetchedUser.appliedCoupons.push(fetchedCoupon.tokenCoupon)
    await fetchedUser.save()

    return NextResponse.json({
        tokenCount: fetchedUser.tokens,
        success: "Coupon successfully applied"
    })
}