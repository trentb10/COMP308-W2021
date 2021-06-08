//Load the index controller
var index = require('../../app/controllers/index.server.controller');
// Load the 'survey' controller
var surveys = require('../../app/controllers/survey.server.controller');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'users' base routes
    //
    //show the 'index' page if a GET request is made to root
    app.route('/').get(index.render);
    //show the 'add_survey' page if a GET request is made to /surveys
    app.route('/add_survey').get(index.renderAdd);
    
    // a post request to /surveys will execute createSurvey method in survey.server.controller
    app.route('/add_survey').post(surveys.createSurvey);

    app.route('/list_surveys').get(surveys.readSurveys);
    app.route('/list_surveys').delete(surveys.deleteSurvey);
    
    
};
