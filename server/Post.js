import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
});
const Post = mongoose.model("post", PostSchema);
export default Post;
