const express = require('express');
require("dotenv").config();
const app = express();
const cors = require('cors');
const PORT =500;
const ConnectToDB = require('./config/dbconnect.js');
const session = require('express-session');
const passport = require('passport');
const OAuth2Strategy = require('passport-google-oauth2').Strategy;
const userdb = require('./model/user.Schema.js');
const userRoutes = require('./routes/userRoutes.js');
const admincodes = require('./routes/admincodes.routes.js');
const usercodes = require('./routes/usercodes.routes.js')


const clientid = process.env.CLIENTID;
const clientsecret = process.env.CLINTSECRET;
const sessionKey = process.env.SESSIONKEY;

ConnectToDB() 


app.use(cors({origin: "http://localhost:3000",method : "GET, POST, PUT, DELETE",credentials: true}))
app.use(express.json());

 // Load Routes
app.use('/api/users', userRoutes)
app.use('/api/admin',admincodes);
app.use('/api/user',usercodes);

// setup session 
app.use(session({
    secret: sessionKey,
    resave: false,
    saveUninitialized: true
}))

// Setup passport middleware to use google oauth strategy
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy(
        {
            clientID: clientid,
            clientSecret: clientsecret,
            callbackURL: "/auth/google/callback",
            scope: ["email", "profile"]
        },
        async(accessToken, refreshToken, profile, done)=>{
            try{console.log(profile)
                let user = await userdb.findOne({googleId: profile.id})
                if(!user){
                    user = new userdb({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value,
                        image: profile.photos[0].value,
                    });
                    await user.save();
                }
                return done(null, user)
            }catch (error) {
                return done(error,null)
            }
        }
    )
)

passport.serializeUser((user, done)=>{
    done(null, user)
})
passport.deserializeUser((user, done)=>{
    done(null, user)
});

// Initialise google auth login

app.get("/auth/google",passport.authenticate("google", { scope: ["email", "profile"] }));

app.get("/auth/google/callback",passport.authenticate("google", {
        successRedirect : "http://localhost:3000/home",
        failureRedirect: "http://localhost:3000/login"
    })
)

app.get("/login/sucess",async(req,res)=>{
    if(req.user){
        res.status(200).json({message:"Login Success", user: req.user})
    }else{
        res.status(401).json({message:"Not Authorized"})
    }
})

app.get("/logout",async(req,res)=>{
    req.logout(function(err){
        if(err) return next(err);
        res.redirect('http://localhost:3000/login');
    });
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})