import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import taskRoutes from './routes/taskRoutes';
import cors from 'cors';
    
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api', taskRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

export default app;
