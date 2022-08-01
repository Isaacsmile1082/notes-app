import express from 'express';
import notesRouter from './routes/notes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

main()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/notes');
}

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use('/notes', notesRouter);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    return console.log(`express is listening at port ${port}`);
});
