# text-ai-generator

[![npm version](https://img.shields.io/npm/v/text-ai-generator.svg)](https://www.npmjs.com/package/text-ai-generator)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A simple AI text generator package that leverages OpenAI's GPT-3.5 for natural language text generation.

## Installation

```bash
npm install ai-text-generator

Usage
const { generateText } = require('text-ai-generator');

const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key
const prompt = 'Tell me a joke about dogs.';

generateText(apiKey, prompt)
  .then((generatedText) => {
    console.log(generatedText);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
Options
apiKey (string): Your OpenAI API key. Required.
prompt (string): The text prompt for the AI to generate content based on.
Contributing
Contributions are welcome! If you'd like to contribute to the development of this package, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them.
Submit a pull request.
Please make sure to follow the code of conduct.



Remember to include a `CODE_OF_CONDUCT.md` file if you have a code of conduct for contributors, and make sure your license file (`LICENSE`) includes the terms under which you're releasing your software. Additionally, replace the placeholder text with your actual information.
