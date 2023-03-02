import express from 'express';
import cors from 'cors';
import categoryRoute from './routes/category.js';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/category', categoryRoute);

app.listen(8000, () => {
  console.log(`Server is running at http://localhost:${8000}`);
});
