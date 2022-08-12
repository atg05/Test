import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

export const taskModal = mongoose.model("Task", TaskSchema);
