const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

const app = express();
app.use(bodyParser.json());

// Your Google Cloud Platform project ID
const projectId = 'your-project-id'; // Replace with your project ID

// Create a new session
const sessionId = uuid.v4();

// Create a new session client
const sessionClient = new dialogflow.SessionsClient();

// Create a route to handle incoming chatbot messages
app.post('/chatbot', async (req, res) => {
  const { message } = req.body;

  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    res.json({ response: result.fulfillmentText });
  } catch (error) {
    console.error('ERROR:', error);
    res.status(500).send('Error processing request');
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
