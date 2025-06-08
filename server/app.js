const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');



app.use(bodyParser.json());
const corsOptions ={
    //origin: true,
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(express.static('dist'))

if (process.env.RENDER === 'true') {
    console.log("App running in Render");
    app.use(express.static('dist'))
} else {
    console.log('Local or unknown platform');
}

console.log(`🧠 Running on Node.js version: ${process.version}`);

module.exports = app;