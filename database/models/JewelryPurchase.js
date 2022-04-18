import { Schema, model, models } from "mongoose";

const JewelryPurchaseSchema = new Schema(
  {
    date: { type: String, required: true },
    jewelry: { type: Array, required: true },
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

  { collection: "jewelryPurchases" }
);

export default models.JewelryPurchase ||
  model("JewelryPurchase", JewelryPurchaseSchema);
