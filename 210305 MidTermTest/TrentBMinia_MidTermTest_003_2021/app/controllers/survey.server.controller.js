// Load the 'Survey' Mongoose model
var Survey = require('mongoose').model('Survey');

// Create a new 'createSurvey' controller method
exports.createSurvey = function (req, res, next) {
    // Create a new instance of the 'Survey' Mongoose model
    var survey = new Survey(req.body);
    // Use the 'Survey' instance's 'save' method to save a new survey document
    survey.save(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(survey);
        }
    });
};

// Create a new 'readSurveys' controller method
exports.readSurveys = function (req, res, next) {
    console.log('in readSurveys')
    // Use the 'Survey' static 'find' method to retrieve the list of surveys
    Survey.find({}, function (err, surveys) {
        console.log(surveys)
        if (err) {
            // Call the next middleware with an error message
            console.log('some error in readSurvey method')
            return next(err);
        } else {
            //
            res.render('list_surveys', {
                title: 'Game Surveys - List of Surveys',
                surveys: surveys
            });
        }
    });
};

// Delete survey method
exports.deleteSurvey = (req, res, next) => {
    Survey.findOneAndRemove({surveyId: req.body.initialSurveyId}, req.body, (err) => {
        if (err) {
            console.log("Error finding and deleting stuff");
            return next(err);
        } else {
        	res.json(req.survey);
            res.redirect('list_surveys');
        }
    });
};

