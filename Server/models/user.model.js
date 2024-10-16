import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  country: { type: String },
  phone: { type: String },
  gender: { type: String },
  dateOfBirth: { type: Date },
  socialMedia: { type: mongoose.Schema.Types.ObjectId, ref: 'SocialMedia' },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('User', userSchema);
