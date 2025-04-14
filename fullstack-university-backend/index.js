import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import departmentRoutes from './routes/departments.js';
import facultyRoutes from './routes/faculty.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/departments', departmentRoutes);
app.use('/faculty', facultyRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
