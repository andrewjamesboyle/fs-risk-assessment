const fetch = require('cross-fetch');
// const { Configuration, OpenAIApi } = require('openai');


const API_URL = 'https://api.openai.com/v1/completions';



// const openAi = new OpenAIApi(configuration);

// const response = async (req, res) => {
//   const completion = await openAi.createCompletion({
//     model: 'text-davinci-003',
//     prompt: 'Suggest three names for a new cat',
//     temperature: 0.6,
//   });
//   res.status(200).json({ result: completion.data.choices[0].text });
// };

// console.log(response);

const promptApi = async () => {
  const resp = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  });
  console.log('promptApi', resp);
};

module.exports = { promptApi };
