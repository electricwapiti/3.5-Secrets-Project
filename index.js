//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from 'body-parser';

import {dirname} from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
var pwd = '';
const correctPwd = 'ILoveProgramming';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// start the port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Load the initial HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/HTML/index.html');
});

// Check the password, decide whether to load & load
app.post('/check', (req, res) => {
    pwd = req.body.password;
    if(pwd === correctPwd){
        res.sendFile(__dirname + '/public/HTML/secret.html');
    } else {
        res.redirect('/?error=true');
    }
});