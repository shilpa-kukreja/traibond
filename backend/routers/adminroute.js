import express from 'express';
const router = express.Router();
import {adminLogin} from '../controllers/admincontroller.js';
import { deleteQuote, getAllQuotes, getSingleQuote, getStats, updateQuoteStatus } from '../controllers/quoteController.js';


router.post('/login',adminLogin);
router.get('/stats', getStats);
router.get('/quotes', getAllQuotes);
router.get('/quotes/:id', getSingleQuote);
router.put('/quotes/:id/status', updateQuoteStatus);
router.delete('/quotes/:id', deleteQuote);

export default router;