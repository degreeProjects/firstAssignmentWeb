import { PostModel, IPost } from "../models/postModel";
import { BaseRepository } from "./baseRepository";

export class PostRepository extends BaseRepository<IPost> {
  constructor() {
    super(PostModel);
  }

  async getBySender(senderId: string): Promise<IPost[] | null> {
    return await this.model.find({ sender: senderId });
  }
}
