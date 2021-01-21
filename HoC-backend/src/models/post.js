import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  // tags: [String],
  companyName: String,
  phoneNumber: String,
  address: String,
  periodStart: String,
  periodEnd: String,
  timeStart: String,
  timeEnd: String,
  number: String,
  gender: String,
  emial: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
    position: String,
  },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
