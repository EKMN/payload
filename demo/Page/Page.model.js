import mongoose from 'mongoose';
import mongooseStringQuery from 'mongoose-string-query';

const PageSchema = new mongoose.Schema({
  title: String,
  content: String,
  slug: String,
  metaTitle: String,
  metaDesc: String
});

PageSchema.plugin(mongooseStringQuery);

export default mongoose.model('Page', PageSchema);