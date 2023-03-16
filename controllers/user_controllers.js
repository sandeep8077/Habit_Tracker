const { render } = require("ejs")
const User = require('../models/user');


// Rendering welcome page
module.exports.welcome = function(req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/deshboard/dashboard');
    }
    return res.render('welcome');
}

// Rendering register page
module.exports.register = function(req, res) {
        if (req.isAuthenticated()) {
            return res.redirect('/deshboard/dashboard');
        }
        return res.render('register');
    }
    // Rendering login page
module.exports.login = function(req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/deshboard/dashboard');
    }
    return res.render('login');
}






// ---create user----//
module.exports.create = async function(req, res) {
    try {
        const { name, email, password, confirm_password } = req.body;
        // compare password and user password from req.body
        if (password != confirm_password) {
            req.flash("error", 'confirm password not matched')

            return res.redirect('back');
        }
        // check  user is already exist or not in database
        let user = await User.findOne({ email: email });
        if (!user) {
            // create user
            let user = await User.create({
                name: name,
                email: email,
                password: password,
            })
            req.flash('success', 'Your have registered successfully')
            return res.redirect('/user/login');

        }
        req.flash('error', 'user already exist');
        console.log("user already exist");
        return res.redirect('back');

    } catch (error) {
        req.flash('error', error);
        console.log("error to database");
        return res.redirect('back');

    }

}

// create session
module.exports.createSession = function(req, res) {
    req.flash('success', 'Logged in successfully');

    res.redirect('/deshboard/dashboard');
}


// destroy session 
module.exports.destroy = function(req, res, next) {

    req.logout(function(error) {
        if (error) {
            return next(error);
        }
        req.flash('success', 'You have logged out');
        res.redirect('/');
    })
}