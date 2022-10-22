// Third Party Modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

// ES Modules fix for __dirname 
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//Auth Step 1 - import modules
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// AUTH Step 2 - Define our Auth strategy
let localStrategy = passportLocal.Strategy;

//Auth Step 3 - import the user model
import User from './models/user.js';

//import mongoose module
import mongoose from 'mongoose';

// Configuration Module
import { MongoURI, Secret } from "../config/config.js";

// Import Router
import indexRouter from './routes/index.route.server.js';
import contactsRouter from './routes/contacts.route.server.js';
import authRouter from './routes/auth.route.server.js';

// instantiate app-server
const app = express();

//Complete the DB Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//Listen for connection success or error
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));

// setup ViewEngine EJS
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'../public')));

//Auth Step 4 - Setup Express Session
app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

//Auth Step 5 - Setup Flash
app.use(flash());

//Auth Step 6 - Initialize Passport and Session
app.use(passport.initialize());
app.use(passport.session());

//Auth Step 7 - Implement the Auth Strategy
passport.use(User.createStrategy());

//Auth Step 8 - Setup serializaion and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Use Routes
app.use('/', indexRouter);
app.use('/', contactsRouter);
app.use('/',authRouter);


// // run app
// app.listen(3000);

// console.log('Server running at http://localhost:3000');

export default app;