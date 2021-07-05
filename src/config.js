// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
  logging: true,

  intentMap: {
    'AMAZON.StopIntent': 'END',
  },

  db: {
    FileDb: {
      pathToFile: '../db/db.json',
    },
  },
  cms: {
    GoogleSheetsCMS: {
        spreadsheetId: '15ZsXiUPpKHdZeLCNAoBdfGvVJCED7M9b0494KfALS0o',
        access: 'public',
        sheets: [
            {
                name: 'responses',
                type: 'Responses',
                position: 1,
            },
        ]
    }
}



};
