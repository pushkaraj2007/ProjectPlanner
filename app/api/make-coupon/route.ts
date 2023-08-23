import connectToMongo from "@/database/connection";
import tokenCoupons from "@/database/tokenCoupons";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    await connectToMongo();

    const { tokenCoupon, tokensToAdd } = await request.json()

    tokenCoupons.create({ tokenCoupon, tokensToAdd })

    return NextResponse.json({ success: "Coupon successfully applied" })
}