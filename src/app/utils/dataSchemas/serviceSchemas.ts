import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  benefits: {
    type: [],
    required: true,
  },
  customerComments: {
    type: [],
    required: true,
  },
  appointmentSteps: { type: [], required: true },
  costs: { type: [], required: true },
  createdAt: { type: Date, required: true },
  lastUpdated: { type: Date, required: true },
});

export const ServiceModel =
  mongoose.models.Service || mongoose.model('Service', serviceSchema);
