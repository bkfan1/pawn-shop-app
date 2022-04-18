import { Schema, model, models } from "mongoose";

const LoanSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },

    customer: {
      name: { type: String, required: true },
      surname: { type: String, required: true },
      dni: { type: String, required: true, unique: true },
      tel: { type: String, required: true },
      address: { type: String, required: false },
    },

    capital: { type: String, required: true },
    emuloments: { type: String, required: true },
    payments: { type: Array, required: true },

    totalAmount: { type: String, required: false },

    createdAt: { type: Date, required: true },
  },

  { collection: "loans" }
);

export default models.Loan || model("Loan", LoanSchema);
