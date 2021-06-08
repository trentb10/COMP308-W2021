// This function handles the following task:
// captures the form input and passes it to comments.ejs page

exports.displayCommentsPage = function (req, res) {

    // Initialize page title
    var title = "Form";

    // Get user input using request object
    var email = req.body.email;
    var username = email.substring(0, email.indexOf('@')); // Username is based on email address

    // Make a reference to the session object
    var session = req.session;

    // Store the username in session object
    session.username = username;
    console.log("Username in current session: " + session.username);

    // Show the comments.ejs page and pass username, email, and page title
    res.render('comments', {
        title: title,
        username: username,
        email: email
    });   

};