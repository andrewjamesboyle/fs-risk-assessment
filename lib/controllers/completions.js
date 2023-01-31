const { Router } = require('express');
const { Configuration, OpenAIApi } = require('openai');
const { promptApi } = require('../utils/utils');

const configuration = new Configuration({
  organization: 'org-MoDFFFDyUhxwaHSoedqk8SIA',
  apiKey: process.env.OPENAI_API_KEY,
});
const openAi = new OpenAIApi(configuration);


module.exports = Router()
  .get('/', async (req, res) => {
    const resp = await promptApi();
    const completion = await openAi.createCompletion({
      model: 'text-davinci-003',
      prompt: 'Suggest three names for a new cat',
      temperature: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
    console.log('completion', completion);
    console.log('resp', resp);
  });
