export const openAICommand = (firstString: string, secondString: string) => {
    return `I will ask you one question. And i want you to asnwer this quesion with only one word!
    What will you get if you put together these two things: ${firstString} + ${secondString}. Do not add 
    any punctuation marks but only the answer to the question. If necessary you might answer with up two three words,
    but you should try to only use one word.`
}