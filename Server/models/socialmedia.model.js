import mongoose from 'mongoose';

const socialMediaSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  facebook: { type: String }, 
  instagram: { type: String },
  linkedin: { type: String }, 
  twitter: { type: String },
  google: { type: String }, 
  snapchat: { type: String }, 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('SocialMedia', socialMediaSchema);
