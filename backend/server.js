import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);

dotenv.config({ path: path.resolve(__filename + '/../../.env')});
const app = express();

app.use(express.static('../frontend/'));
app.use(cors());

app.listen(3000, () => {
    console.log('Listening at 3000');
});

app.get('/:latitude/:longitude/', async (request, response) => {
    const {latitude, longitude} = request.params;

    const apiKey = process.env.WEATHER_API_KEY;

    const url = process.env.WEATHER_API_URL + `units=imperial&lat=${latitude}&lon=${longitude}&exclude=lat,lon,timezone,timezone_offset,minutely,hourly,daily,alerts&appid=${apiKey}`;
    
    const apiData = await fetch(url);
    const apiJSON = await apiData.json();

    response.json(apiJSON);
});

app.get('/headlines/', async (request, response) => {
    const url = process.env.NEWS_API_URL + process.env.NEWS_API_KEY;
    
    const apiData = await fetch(url);
    const apiJSON = await apiData.json();

    response.json(apiJSON);
});