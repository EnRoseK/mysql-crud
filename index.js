import express from 'express';
import cors from 'cors';
import categoryRoute from './routes/category.js';
import productRoute from './routes/product.js';
import userRoute from './routes/user.js';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/categories', categoryRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);

app.listen(8000, () => {
  console.log(`Server is running at http://localhost:${8000}`);
});
