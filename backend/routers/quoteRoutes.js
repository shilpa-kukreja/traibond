import express from 'express';
const QuoteRouter = express.Router();
import { body } from 'express-validator';
import { createQuote } from '../controllers/quoteController.js';

// Validation rules
const quoteValidation = [
  body('name')
    .notEmpty().withMessage('Full name is required')
    .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email'),
  body('phone')
    .notEmpty().withMessage('Phone number is required')
    .matches(/^\+?[\d\s-]{10,}$/).withMessage('Please enter a valid phone number'),
  body('pickup')
    .notEmpty().withMessage('Pickup location is required'),
  body('delivery')
    .notEmpty().withMessage('Delivery location is required'),
  body('date')
    .notEmpty().withMessage('Shipping date is required')
    .isISO8601().withMessage('Invalid date format')
];

// Public routes
QuoteRouter.post('/quote', quoteValidation, createQuote);

export default QuoteRouter;