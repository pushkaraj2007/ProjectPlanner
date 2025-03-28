import { NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";
import { NextApiRequest } from 'next';
import users from '@/database/users';
import connectToMongo from '@/database/connection';
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request) {
    await connectToMongo();
    
    console.log("Started")
    const { projectName, appType, isJS, complexity, additionalTech } = await request.json()

    console.log("Below is the backend" + appType, isJS, complexity, additionalTech)

    const token = await getToken({
        req: request as unknown as NextApiRequest,
        secret: process.env.NEXTAUTH_SECRET
    });

    const user = await users.findOne({ email: token?.email })

    if (!user) {
        return NextResponse.json({
            error: "User not found"
        })
    }

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-lite",
        generationConfig: {
            temperature: 1,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 400,
        },
    });

    const prompt = `As a creative project thinker, I'm seeking your assistance in generating a list of 5 project ideas. These projects should align with my requirements and be of easy complexity.

I'll provide you 'AppType' (Frontend, Backend, FullStack) If it's a Frontend project then I'll tell you if I want to use JavaScript or just HTML & CSS with 'IsJS' (Yes, No), 'Complexity' of the project (Easy, Medium, Hard), and at last any addition technologies that I want to most include in a project with 'AdditionalTech' e.g Redux (Comma separated for each technology).

When the AppType is Backend, the project suggested should be related to the backend only. It shouldn't involve creating UI.

Note that, AdditionalTech can remain blanked if so, I'll write it as None.

Please provide the project ideas in a JSON format, including the project name and a brief description with only two keys 'name' and 'description'. Let your creativity flow!

The JSON should be like the array of projects in the ideas key.

Remember that description of each idea should be less than 150 characters. If I provide isJS as false don't provide projects that require JavaScript instead provide projects that requires HTML and CSS only. Remember that ideas should be strickly according to my requirements.

AppType: ${appType}
${appType == 'Frontend' ? `IsJS: ${isJS}\n` : ''}
Complexity: ${complexity}
AdditionalTech: ${additionalTech}`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let generatedContent = response.text();
        
        // Clean up Markdown code block markers
        generatedContent = generatedContent
            .replace(/```json\n?/g, '')
            .replace(/```\n?/g, '')
            .trim();

        // Ensure the response is properly formatted JSON
        if (!generatedContent.includes('"ideas":')) {
            if (generatedContent.startsWith('[')) {
                generatedContent = `{"ideas": ${generatedContent}}`;
            } else {
                throw new Error('Invalid response format from AI');
            }
        }

        console.log("Cleaned content:", generatedContent);

        let jsonData;
        try {
            jsonData = JSON.parse(generatedContent);
        } catch (parseError: unknown) {
            console.error('JSON Parse Error:', parseError);
            console.error('Raw content:', generatedContent);
            return NextResponse.json({
                error: "Failed to parse AI response",
                details: parseError instanceof Error ? parseError.message : 'Unknown error occurred'
            }, { status: 500 });
        }

        if (!jsonData.ideas || !Array.isArray(jsonData.ideas)) {
            return NextResponse.json({
                error: "Invalid response structure",
                received: jsonData
            }, { status: 500 });
        }

        const ideasArray = jsonData.ideas;

        console.log("User tokens before:", user.tokens);
        user.tokens = user.tokens - 1;
        user.creations.push(
            {
                name: projectName,
                projectsIdeas: ideasArray
            }
        )
        await user.save();
        console.log("User tokens after:", user.tokens);
        return NextResponse.json({
            message: ideasArray
        });
    } catch (error: any) {
        console.error('Error in generate-ideas:', error);
        return NextResponse.json({
            error: "Failed to generate ideas",
            details: error.message
        }, { status: 500 });
    }
}