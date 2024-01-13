import mongoose from "mongoose";

// Define the Transaction schema
const transactionSchema = new mongoose.Schema({
  orderIds: {
    type: [String], // Assuming order IDs are strings; adjust data type as needed
    required: true
  },
  user: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  payment_status: {
    type: Boolean,
    default: false // Initial payment status set to false
  },
 tranId: {
    type: String,
    required: true// Initial payment status set to false
  },
  // userName: {
  //   type: String,
  //   required: true// Initial payment status set to false
  // },
  total_amount: {
    type: Number,
    required: true
  },
  // Other transaction details as needed
}, { timestamps: true }); // Automatically add timestamps for createdAt and updatedAt

// Create a Transaction model using the schema
const Transaction = mongoose.model('Transaction', transactionSchema,'transactions');

export default Transaction;