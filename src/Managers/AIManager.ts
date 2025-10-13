
import {openAICommand} from "../openAIConfig/openAICommand";
import {openaiConfig} from "../openAIConfig/openaiConfig";

export class AIManager {
    public static async _generateNewTag(firstTag: string, secondTag: string) {
        const response = await openaiConfig.chat.completions.create(
            {
                model: "gpt-3.5-turbo",
                messages: [
                    {role: "user", content: openAICommand(firstTag, secondTag)},
                ],
            }
        );
        return response.choices[0].message.content
    }
}