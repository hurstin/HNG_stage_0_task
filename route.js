import express from 'express';
import { me } from './controller.js';

const router = express.Router();

router.route('/me').get(me);

export default router;
