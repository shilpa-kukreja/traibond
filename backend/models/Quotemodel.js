import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  // Personal Information
  name: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^\+?[\d\s-]{10,}$/, 'Please enter a valid phone number']
  },
  company: {
    type: String,
    trim: true,
    default: ''
  },

  // Shipment Details
  service: {
    type: String,
    trim: true,
    default: ''
  },
  weight: {
    type: Number,
    min: [0, 'Weight cannot be negative'],
    default: 0
  },
  length: {
    type: Number,
    min: [0, 'Length cannot be negative'],
    default: 0
  },
  width: {
    type: Number,
    min: [0, 'Width cannot be negative'],
    default: 0
  },
  height: {
    type: Number,
    min: [0, 'Height cannot be negative'],
    default: 0
  },

  // Route Information
  pickup: {
    type: String,
    required: [true, 'Pickup location is required'],
    trim: true
  },
  delivery: {
    type: String,
    required: [true, 'Delivery location is required'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Shipping date is required']
  },
  specialInstructions: {
    type: String,
    trim: true,
    default: ''
  },

  // Status
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'quoted', 'accepted', 'rejected'],
    default: 'pending'
  },
  quoteAmount: {
    type: Number,
    default: null
  },
  adminNotes: {
    type: String,
    default: ''
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for better query performance
quoteSchema.index({ email: 1 });
quoteSchema.index({ status: 1 });
quoteSchema.index({ createdAt: -1 });

// Virtual for volume calculation
quoteSchema.virtual('volume').get(function() {
  return (this.length * this.width * this.height) / 1000000; // in cubic meters
});

// Virtual for formatted date
quoteSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;