import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

app.use(express.static('../frontend/'));

app.listen(3000, () => {
    console.log('Listening at 3000');
});

app.get('/location/:latitude/:longitude', async (request, response) => {
    const { latitude, longitude } = request.params;
    const apiKey = process.env.WEATHER_API_KEY;

    const url = process.env.WEATHER_API_URL + `units=imperial&lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
    const apiData = await fetch(url);
    const apiJSON = await apiData.json();
    
    response.json(apiJSON);
});