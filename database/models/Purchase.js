import {Schema, model, models} from "mongoose";

const PurchaseSchema = new Schema(
    {
        items: [],
        paymentMethod: String,
        paymentData: {
            bankName: String,
            bankDni: String,
            bankAccountNum: String,
            bankTel: String,
            totalAmount: String
        },
        createdAt: String
    }
)

export default models.Purchase || model('Purchase', PurchaseSchema);