// Create a new 'render' controller method
exports.render = function (req, res) {
    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('index', { title: 'Game Surveys - Index' } );
    
};

// Create a new 'renderAdd' controller method
exports.renderAdd = function (req, res) {
    // Use the 'response' object to render the 'add_survey' view with a 'title' property
    res.render('add_survey', { title: 'Game Surveys - Add Survey' });

};
