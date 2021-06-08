module.exports = function (app) {
    //load the controller(s)
    var index = require('../controllers/comments.server.controller');
    
    app.get('/thankyou', function (req, res) {
        //display thank you page
        res.render('thankyou', { pageTitle: 'Submitted' });
    });

    app.post('/thankyou', function (req, res) {
        //use the controller function
        index.displayThankYouPage(req, res);
        
    });
};