import mongoose from "mongoose";

const ProjectSchema = new mongoose.model({
  name: {
    type: String,
    required: true,
  },
});

export const projectModal = mongoose.modal("Project", ProjectSchema);
