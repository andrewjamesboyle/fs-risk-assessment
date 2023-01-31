const { Router } = require('express');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  organization: 'org-MoDFFFDyUhxwaHSoedqk8SIA',
  apiKey: process.env.OPENAI_API_KEY,
});
const openAi = new OpenAIApi(configuration);


module.exports = Router()
  .get('/', async (req, res) => {
    
    const completion = await openAi.createCompletion({
      model: 'text-davinci-003',
      prompt: 'generate a list of topics that might perform well for SEO in a mountain bike blog',
      temperature: 0.6,
      max_tokens: 25,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  });
