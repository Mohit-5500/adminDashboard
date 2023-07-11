/* This code is defining a Mongoose schema for a transaction and exporting it as a model. The schema
has three fields: `userId` (a string), `cost` (a string), and `products` (an array of
`mongoose.Types.ObjectId` with a type of `Number`). The `timestamps` option is set to `true`, which
means that Mongoose will automatically add `createdAt` and `updatedAt` fields to the schema. The
`Transaction` model is created using the schema and exported as the default export of the module. */
import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    userId: String,
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);
const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
