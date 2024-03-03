export const openAICommand = (firstString: string, secondString: string) => {
    return `I will ask you one question. And i want you to answer this question with only one word!
    What will you get if you put together these two things: ${firstString} + ${secondString}. Do not add 
    any punctuation marks but only the answer to the question. Make sure there is not a "." at the end of the word`
}