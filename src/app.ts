import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';

const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    'https://task-manager-frontend-pearl.vercel.app',
    'http://localhost:3000'
  ]
}));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Task Manager!')
})

export default app;
