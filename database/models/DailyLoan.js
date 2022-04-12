import { Schema, model, models } from "mongoose";

const DailyLoanSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },

    customer: {
      name: String,
      surname: String,
      dni: String,
      tel: String,
      address: String,
    },

    capital: { type: String, required: true },
    emuloments: { type: String, required: true },
    payments: { type: Array, required: true },

    totalAmount: { type: String, required: false },

    createdAt: { type: Date, required: true },
  },

  { collection: "dailyLoans" }
);

export default models.DailyLoan || model("DailyLoan", DailyLoanSchema);
