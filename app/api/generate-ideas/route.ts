import { NextResponse, NextRequest } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

export async function POST(req: NextRequest) {
    console.log("Started")

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "As a creative project thinker, I'm seeking your assistance in generating a list of 5 project ideas. These projects should align with my requirements and be of easy complexity.\n\nI'll provide you 'AppType' (Frontend, Backend, FullStack) If it's a Frontend project then I'll tell you if I want to use JavaScript or just HTML & CSS with 'IsJS' (Yes, No), 'Complexity' of the project (Easy, Medium, Hard), and at last any addition technologies that I want to most include in a project with 'AdditionalTech' e.g Redux (Comma separated for each technology).\n\nWhen the AppType is Backend, the project suggested should be related to the backend only. It shouldn't involve creating UI.\n\nNote that, AdditionalTech can remain blanked if so, I'll write it as None.\n\nPlease provide the project ideas in a JSON format, including the project name and a brief description with only two keys 'name' and 'description'. Let your creativity flow!\n\nThe JSON should be like the array of projects in the ideas key.\n\nRemember that description of each idea should be less than 150 characters"
            },
            {
                "role": "user",
                "content": "AppType: Backend\nComplexity: Easy\nAdditionalTech: None"
            }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    
    const generatedContent = response.data.choices[0].message?.content as string;

    try {
        const jsonData = JSON.parse(generatedContent);
        const ideasArray = jsonData.ideas;

        return NextResponse.json({
            message: ideasArray
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);

        return NextResponse.error();
    }

    return NextResponse.json({
        message: 'Success'
    })
}