const express = require("express");
const cors = require('cors')
require('dotenv').config()
const router = require("./router.config");
require("./db.config") // databsae connection
const { MulterError } = require('multer')

const app = express();

const allowedOrigins = ['http://localhost:5173', 'https://maya-wears.com']; 

const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests from allowed origins or no origin (e.g., mobile apps or Postman)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Allow cookies and credentials
};
app.use(cors(corsOptions));


// Parser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(router);

    app.use((req, res, next) => {       
    next({ status: 404, message: "Resource not found." });
});

app.use((error, req, res, next) => {
    console.log(error)
    let statusCode = error.status || 500;
    let message = error.message || "Server error ...";
    let details = error.details || null;

    res.status(statusCode).json({
        result: details,// Include details if available
        message: message,  // Include the message
        meta: null
    });
});

module.exports = app