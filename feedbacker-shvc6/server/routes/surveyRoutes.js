const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');
const requireCredits = require('../middleware/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplate/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for your feedback!');
  });

  app.post('/api/surveys', requireAuth, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const formattedRecipients = recipients.split(',').map(email => ({ email: email.trim() }));

    const survey = new Survey({
      title, subject, body,
      recipients: formattedRecipients,
      dateSent: Date.now(),
      _user: req.user.id
    });

    const template = surveyTemplate(survey);
    const mailer = new Mailer(survey, template);

    try {
      await mailer.send();
      await survey.save();

      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (e) {
      res.status(422).send(err);
    }
  });

  app.post('/api/surveys/webhooks', (req, res) => {

  });
};