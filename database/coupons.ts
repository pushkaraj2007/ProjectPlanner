import mongoose from "mongoose";
const { Schema } = mongoose

const couponsSchema = new Schema({
    tokenCoupons: [
        'welcomeBonus',
    ]
})

const coupons = mongoose.models.coupons || mongoose.model('coupon', couponsSchema)

export default coupons