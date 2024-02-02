const openai = require('openai');

const generateText = async (apiKey = '', prompt) => {
  try {
    if (!apiKey) {
      throw new Error('API key is required. Please provide a valid OpenAI API key.');
    }

    const openaiInstance = new openai.OpenAIAPI({ key: apiKey });

    const openaiResponse = await openaiInstance.Completion.create({
      engine: 'text-davinci-002',
      prompt,
      max_tokens: 150,
    });

    return openaiResponse.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating text:', error.message);
    throw error;
  }
};

module.exports = {
  generateText,
};
