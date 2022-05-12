module.exports.isLoggedIn = (req, res, next) => {
    //console.log("REQ.User...", req.user);
    if (!req.isAuthenticated()){
        req.flash("error", "You mush be signed in first!");
        return res.send("login first.")
    }
    next();
};