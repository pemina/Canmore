import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('CanMore Financial API Running');
});

// Example route structure similar to what might be expected
app.post('/api/contact', (req, res) => {
    // Handle contact form submission
    console.log('Contact form submitted:', req.body);
    res.status(200).json({ message: 'Message received' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
