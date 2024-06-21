



/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
  
//   const apiKey = "AIzaSyCOB3d-j1At_hKt1z8huk3vbIpYTI30ZXM";
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run() {
//     const chatSession = model.startChat({
//       generationConfig,
//    // safetySettings: Adjust safety settings
//    // See https://ai.google.dev/gemini-api/docs/safety-settings
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//     console.log(result.response.text());
//   }
  
//   run();

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyCOB3d-j1At_hKt1z8huk3vbIpYTI30ZXM";

async function runChat(prompt)
{
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({model:MODEL_NAME});

    const generationConfig = {
        temperature:0.9,
        topK:1,
        topP:1,
        maxOutputTokens:2048,
    };

    const safetySettings = [
        {
            category:HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category:HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category:HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category:HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history:[

        ],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
    return response.text();
}

export default runChat;