require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function listModels() {
    if (!process.env.GEMINI_API_KEY) {
        console.error("API Key missing");
        return;
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    console.log("Testing gemini-1.0-pro...");
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
        await model.generateContent("Hello");
        console.log("Success with gemini-1.0-pro");
    } catch (e) { console.log("Failed gemini-1.0-pro", e.message.split('\n')[0]); }
}

listModels();
