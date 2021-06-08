exports.displayThankYouPage = function (req, res) {

    // Initialize page title
    var title = "Thank You!";

    // Get user input using request object
    var studentEmail = req.body.email;
    var username = req.session.username; // Get username from session
    var courseComment = req.body.courseComment;
    var instructor = req.body.instructor;

    // // Make a reference to the session object
    // var session = req.session;

    // // Store the username in session object
    // session.username = username;
    // console.log("Username in current session: " + session.username);

    // Show the thankyou.ejs page and pass username and page title
    res.render('thankyou', {
        title: title,
        username: username,
        instructor: instructor,
        courseComment: courseComment
    });   

};