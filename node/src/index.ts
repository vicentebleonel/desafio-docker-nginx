import express from 'express';
import bodyParser from 'body-parser';
import peopleRouter from './people';

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use(peopleRouter);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});