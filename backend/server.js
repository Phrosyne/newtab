import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

app.use(express.static('../frontend/'));

app.listen(3000, () => {
    console.log('Listening at 3000');
});