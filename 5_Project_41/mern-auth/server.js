const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express()

// middlewares
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

// db config
const db = require('./config/keys').mongoURI

// db connection
mongoose.connect(
    db,
    {
        useNewUrlParser: true
    }
).then(() => console.log("MongoDB Successfully Connected"))
 .catch(err => console.log(err))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is up and running on port ${port} !!`))
