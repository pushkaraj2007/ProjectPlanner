import mongoose from "mongoose";
const { Schema } = mongoose

const tokenCouponsSchema = new Schema({
    tokenCoupon: String
})

const tokenCoupons = mongoose.models.tokenCoupons || mongoose.model('tokenCoupons', tokenCouponsSchema)

export default tokenCoupons