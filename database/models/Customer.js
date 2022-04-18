import { Schema, model, models } from "mongoose";

const CustomerSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    dni: { type: String, required: true, unique:true },
    tel: { type: String, required: true },
    address: { type: String, required: false },
  },
  { collection: "customers" }
);

export default models.CustomerSchema || model("CustomerSchema", CustomerSchema);
