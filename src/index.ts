import express from 'express';
import bodyParser from 'body-parser';
import buyAll from './buyAll.controller';


const PORT = 8080;

const app = express();

//middlewares

app.use(bodyParser.json());


//routes

app.get('/buyall',buyAll);
app.get('/moneynecessary')

app.listen(PORT, () =>{
    console.log(`server starter at http://localhost: ${PORT}`);
})