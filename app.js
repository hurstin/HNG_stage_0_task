import express from 'express';
import router from './route.js';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const app = express();

const PORT = process.env.PORT || 3000;

// limit requests from same ip
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'too many request from this ip, please try again in an hour',
});

//should be called before all route with '/api'
app.use('/', limiter);

app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
