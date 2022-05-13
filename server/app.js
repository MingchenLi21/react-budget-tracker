if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require( "express" );
const session = require( "express-session" );
const passport = require( "passport" );
const localStrategy = require( "passport-local" );
const User = require( "./Models/userModel" );
const app = express();
const path = require('path')
const { isLoggedIn } = require( "./middleware" );
const bodyParser = require( "body-parser" );
const MongoStore = require( "connect-mongo" );
const mongoose = require( "mongoose" );
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/budgetApp";

mongoose.connect( dbUrl )
    .then( () => {
        console.log( "Connection established!" );
    } ).catch( ( err ) => {
        console.log( "There is an error while connecting to db." );
        console.log( err );
    } );


const db = mongoose.connection;

db.on( "error", console.error.bind( console, "Database connection error:" ) );
db.once( "open", () => { console.log( "Database connected!" ) } )

// use middleware to parse request
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

const secret = process.env.SECRET || "thisisasectret";

const store = MongoStore.create( {
    mongoUrl: dbUrl,
    secret,
    touchAfter: 24 * 3600 // 24 hours
} );
store.on( "error", ( e ) => {
    console.log( "There's an error on seesion store" );
    console.log( e );
} )

// session config
const sessionConfig = {
    secret,
    resave: false,
    saveUninitialized: true,
    store,
    cokie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    }
}
app.use( session( sessionConfig ) );

app.use( passport.initialize() );
app.use( passport.session() );
passport.use( new localStrategy( User.authenticate() ) );

passport.serializeUser( User.serializeUser() );
passport.deserializeUser( User.deserializeUser() );

// create a new user
app.post( "/api/newUser", async ( req, res ) => {
    const { email, username, password } = req.body;
    const user = await User.findOne( { username: username } ) || await User.findOne( { email: email } );
    if ( user ) {
        return res.send( "Username or Email already existed!" )
    }

    const newuser = new User( { username, email, budget: 2000 } );
    const newUser = await User.register( newuser, password );
    newUser.save();

    res.send( "success!" );
} );

app.post( "/api/login", ( req, res, next ) => {
    passport.authenticate( "local", ( err, user, info ) => {
        if ( err ) throw err;
        console.log( user );
        if ( !user ) res.send( "No User Exists" );
        else {
            req.logIn( user, ( err ) => {
                if ( err ) throw err;
                console.log( req.user );
                res.send(req.user);
            } );
        }
    } )( req, res, next );
} );


// create a new expense item
app.post( "/api/newItem", isLoggedIn, async ( req, res ) => {
    const user = await User.findById( req.user._id );
    user.items.push( { ...req.body, date: req.body.date, amount: parseInt( req.body.amount ) } );
    user.save();
    res.send( "added a new item!" )
} );

// get user's expense list
app.get( "/api/isLoggedIn", ( req, res ) => {
    res.send( req.user );
} );

// delete a expense item
app.post( "/api/deleteItem", isLoggedIn, async ( req, res ) => {
    const user = await User.findById( req.user._id );
    const id = req.body.id;
    user.items = user.items.filter( ( item ) => item._id !== id );
    user.save();
    res.send( "item deleted!" )
} );

// update user budget
app.post( "/api/changeBudget", isLoggedIn, async ( req, res ) => {
    const user = await User.findById( req.user._id );
    user.budget = parseInt( req.body.budget );
    user.save();
    res.send( "budget updated!" )
} );

app.post( "/api/logout", isLoggedIn, ( req, res ) => {
    req.logOut();
    res.send( "Logged out!" );
} );

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', "index.html"))
})

const port = process.env.PORT || 5000;

app.listen( port, () => { console.log( `Listening on port ${port}` ) } );