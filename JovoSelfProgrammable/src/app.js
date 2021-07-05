'use strict';

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');
const { GoogleSheetsCMS } = require('jovo-cms-googlesheets');

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

app.use(
  new Alexa(),
  new GoogleAssistant(),
  new JovoDebugger(),
  new FileDb(),
  new GoogleSheetsCMS()
);

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
  LAUNCH() {
    return this.toIntent('HelloWorldIntent');
  },

  HelloWorldIntent() {
    this.ask(this.t('welcome.speech'));
  },

  SecondIntent() {
    this.tell(this.t('welcome.second'));
  },
});

module.exports = { app };
