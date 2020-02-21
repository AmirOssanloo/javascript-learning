const requireAuth = require('../middleware/requireAuth');
const requireCredits = require('../middleware/requireCredits');

module.exports = app => {
  app.get('/api/surveys', (req, res) => {

  });

  app.post('/api/surveys', requireAuth, requireCredits, (req, res) => {
    //
  });

  app.post('/api/surveys/webhooks', (req, res) => {


  });
};