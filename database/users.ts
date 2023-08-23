import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    tokens: {
        type: Number,
        required: true
    },
    creations: {
        type: Array,
        required: true
    },
    appliedCoupons: {
        type: Array,
        required: true
    }
})

const user = mongoose.models.user || mongoose.model('user', userSchema)

export default user