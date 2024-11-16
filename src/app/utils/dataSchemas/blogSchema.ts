import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  lastModified: {
    type: Date,
    required: true,
  },
  contentImg: [],
  status: {
    type: String,
    enum: ['draft', 'released', 'private'],
    required: true,
    default: 'draft',
  },
});

export const BlogModel =
  mongoose.models.Blog || mongoose.model('Blog', blogSchema);
