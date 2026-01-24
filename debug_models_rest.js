require('dotenv').config();

const API_KEY = process.env.GEMINI_API_KEY;
const URL = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

const fs = require('fs');

async function checkModels() {
    if (!API_KEY) {
        console.log("No API Key found in .env");
        return;
    }

    console.log(`Checking models with key starting with: ${API_KEY.substring(0, 5)}...`);

    try {
        const response = await fetch(URL);
        const data = await response.json();

        fs.writeFileSync('models_log.json', JSON.stringify(data, null, 2));
        console.log("Models saved to models_log.json");

    } catch (err) {
        console.error("Network Error:", err);
    }
}

checkModels();
