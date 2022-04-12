import { Schema, model, models } from "mongoose";

const PurchaseSchema = new Schema(
  {
    date: { type: Date, required: true },
    items: { type: Array, required: true },
    paymentMethod: { type: String, required: true },
    paymentData: {
      bankName: { type: String, required: false },
      bankDni: { type: String, required: false },
      bankAccountNum: { type: String, required: false },
      bankTel: { type: String, required: false },
      totalAmount: { type: String, required: true },
    },
    createdAt: { type: Date, required: true },
  },

  {collection:"purchases"}
  
);

export default models.Purchase || model("Purchase", PurchaseSchema);
