import express from 'express';
import notesRouter from './routes/notes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';
import 'dotenv/config';
import './logger';

main()
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/notes');
}

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use('/auth', authRouter);
app.use('/notes', notesRouter);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    return console.log(`express is listening at port ${port}`);
});
