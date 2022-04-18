import { Schema, model, models } from "mongoose";

const PawnSchema = new Schema(
  {
    agreementDate: {type:String, required:true},
    expiringDate : {type:String ,required: true},

    customer: {
      name: { type: String, required: true },
      surname: { type: String, required: true },
      dni: { type: String, required: true, unique: true },
      tel: { type: String, required: true },
      address: { type: String, required: false },
    },

    goods: {type:Array, required:true},

    createdAt: { type: Date, required: true },
  },
  { collection: "pawns" }
);

export default models.Pawn || model("Pawn", PawnSchema);