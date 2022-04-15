const express = require('express')
const routes  = require('./src/routes/routes')
// import mongoose from 'mongoose';
const bodyParser = require('body-parser')
const cors = require("cors");


const app = express();
const PORT = 3040;

app.use(cors());

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Contact', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes.routes(app);

app.get('/', (req, res) => {
    res.send(`Express server running on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Your server is running on port: ${PORT}`)
})
