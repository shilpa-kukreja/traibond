
import { validationResult } from 'express-validator';
import nodemailer from 'nodemailer';
import Quote from '../models/Quotemodel.js';
import dotenv from "dotenv";
dotenv.config();

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// @desc    Create a new quote
// @route   POST /api/quote
// @access  Public
export const createQuote = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    // Create quote
    const quote = await Quote.create(req.body);

    // Send confirmation email
    await sendConfirmationEmail(quote);

    res.status(201).json({
      success: true,
      message: 'Quote submitted successfully',
      data: quote
    });
  } catch (error) {
    console.error('Error creating quote:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message
    });
  }
};

// @desc    Get all quotes (Admin)
// @route   GET /api/admin/quotes
// @access  Private/Admin
export const getAllQuotes = async (req, res) => {
  try {
    const { status, search, page = 1, limit = 10 } = req.query;
    
    let query = {};
    
    // Filter by status
    if (status && status !== 'all') {
      query.status = status;
    }
    
    // Search functionality
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const [quotes, total] = await Promise.all([
      Quote.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit)),
      Quote.countDocuments(query)
    ]);
    
    res.status(200).json({
      success: true,
      data: quotes,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get single quote by ID (Admin)
// @route   GET /api/admin/quotes/:id
// @access  Private/Admin
export const getSingleQuote = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    
    if (!quote) {
      return res.status(404).json({
        success: false,
        message: 'Quote not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: quote
    });
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Update quote status (Admin)
// @route   PUT /api/admin/quotes/:id/status
// @access  Private/Admin
export const updateQuoteStatus = async (req, res) => {
  try {
    const { status, quoteAmount, adminNotes } = req.body;
    
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      {
        status,
        quoteAmount,
        adminNotes,
        updatedAt: Date.now()
      },
      { new: true, runValidators: true }
    );
    
    if (!quote) {
      return res.status(404).json({
        success: false,
        message: 'Quote not found'
      });
    }
    
    // Send status update email
    await sendStatusUpdateEmail(quote);
    
    res.status(200).json({
      success: true,
      message: 'Quote status updated successfully',
      data: quote
    });
  } catch (error) {
    console.error('Error updating quote:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Delete quote (Admin)
// @route   DELETE /api/admin/quotes/:id
// @access  Private/Admin
export const deleteQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndDelete(req.params.id);
    
    if (!quote) {
      return res.status(404).json({
        success: false,
        message: 'Quote not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Quote deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting quote:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Get statistics (Admin)
// @route   GET /api/admin/stats
// @access  Private/Admin
export const getStats = async (req, res) => {
  try {
    const [totalQuotes, pendingQuotes, reviewedQuotes, quotedQuotes, todayQuotes] = await Promise.all([
      Quote.countDocuments(),
      Quote.countDocuments({ status: 'pending' }),
      Quote.countDocuments({ status: 'reviewed' }),
      Quote.countDocuments({ status: 'quoted' }),
      Quote.countDocuments({
        createdAt: {
          $gte: new Date().setHours(0, 0, 0, 0),
          $lte: new Date().setHours(23, 59, 59, 999)
        }
      })
    ]);
    
    res.status(200).json({
      success: true,
      data: {
        total: totalQuotes,
        pending: pendingQuotes,
        reviewed: reviewedQuotes,
        quoted: quotedQuotes,
        today: todayQuotes
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Helper function to send confirmation email
async function sendConfirmationEmail(quote) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: quote.email,
    subject: 'Quote Request Received - DHL Logistics',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2167ad;">Thank You for Your Quote Request</h2>
        <p>Dear ${quote.name},</p>
        <p>We have received your shipping quote request and our team will review it shortly.</p>
        
        <h3 style="color: #2167ad;">Quote Summary</h3>
        <p><strong>Reference ID:</strong> ${quote._id}</p>
        <p><strong>Service Type:</strong> ${quote.service || 'Not specified'}</p>
        <p><strong>From:</strong> ${quote.pickup}</p>
        <p><strong>To:</strong> ${quote.delivery}</p>
        <p><strong>Shipping Date:</strong> ${new Date(quote.date).toLocaleDateString()}</p>
        
        <p>We will contact you within 24 hours with your personalized quote.</p>
        
        <p>Best regards,<br/>DHL Logistics Team</p>
      </div>
    `
  };
  
  await transporter.sendMail(mailOptions);
}

// Helper function to send status update email
async function sendStatusUpdateEmail(quote) {
  let statusMessage = '';
  switch(quote.status) {
    case 'quoted':
      statusMessage = `Your quote amount is: $${quote.quoteAmount}. Please login to view details.`;
      break;
    case 'accepted':
      statusMessage = 'Your quote has been accepted. Our team will contact you shortly with further instructions.';
      break;
    case 'rejected':
      statusMessage = 'We regret to inform you that your quote request could not be processed at this time.';
      break;
    default:
      statusMessage = `Your quote status has been updated to: ${quote.status}`;
  }
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: quote.email,
    subject: `Quote Status Update - ${quote.status.toUpperCase()}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2167ad;">Quote Status Update</h2>
        <p>Dear ${quote.name},</p>
        <p>${statusMessage}</p>
        
        ${quote.adminNotes ? `<p><strong>Admin Notes:</strong> ${quote.adminNotes}</p>` : ''}
        
        <p>Reference ID: ${quote._id}</p>
        
        <p>Best regards,<br/>DHL Logistics Team</p>
      </div>
    `
  };
  
  await transporter.sendMail(mailOptions);
}