import { model } from "./config/gemini";

console.log(process.env.GEMINI_API_KEY);

async function testGemini() {
    const result = await model.generateContent(
        "Say hello in one sentence."
    );

    console.log(result.response.text());
}

testGemini();


