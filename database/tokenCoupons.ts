import mongoose from "mongoose";
const { Schema } = mongoose

const tokenCouponsSchema = new Schema({
    tokenCoupon: {
        type: String, 
        required: true
    },
    tokensToAdd: {
        type: Number,
        required: true
    }
})

const tokenCoupons = mongoose.models.tokenCoupons || mongoose.model('tokenCoupons', tokenCouponsSchema)

export default tokenCoupons