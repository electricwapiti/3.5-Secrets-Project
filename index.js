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
const correctP = 'ILoveProgramming';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Load the initial HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

// Check the password, decide whether to load & load
app.post('/check', (req, res) => {
    pwd = req.body.password;
    if(req.body.password = 'ILoveProgramming'){
        res.sendFile(__dirname + '/public/secret.html');
    } else {
        
    }
    
})