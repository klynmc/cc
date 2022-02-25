import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import path from 'path'
const __dirname = path.resolve();

const PORT = process.env.PORT || 3001;

const app = express();
/* dotenv.config(); */

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());
app.use(express.json())

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')));
};

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build/index.html'));
});

const CONNECTION_URL = 'mongodb+srv://lmckay:lmckay123@cluster0.qzesj.mongodb.net/cc?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));