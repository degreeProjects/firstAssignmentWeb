import mongoose, { Document } from "mongoose";

export interface IPost extends Document {
  description: string;
  location: string;
  sender: string;
}

const postSchema = new mongoose.Schema<IPost>(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    sender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const PostModel = mongoose.model<IPost>("Post", postSchema);
