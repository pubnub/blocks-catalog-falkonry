export default (request) => {
  // require xhr module to make http request
  const xhr = require('xhr');

  // your falkonry api token
  const token = 'API_TOKEN';

  // your falkonry webhook URL (usually in the form of https://?.falkonry.ai/webhook/<buffer>)
  const webhookUrl = 'WEBHOOK_URL';

  try {
    request.message.time = new Date().getTime();

    // define the HTTP request parameters
    var params = {
      method: 'POST',
      headers: {
        Authorization: 'Token ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
        body: request.message
    };

    // create a HTTP POST request to the Falkonry API
    return xhr.fetch(webhookUrl, params).then(function () {
      return request.ok();
    });

  } catch (e) {
    console.error('Uncaught exception:', e);
  }

};
