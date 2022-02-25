const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

/* const path = require('path')
const __dirname = path.resolve(); */

const PORT = process.env.PORT || 3001;

const app = express();
/* dotenv.config(); */

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());
app.use(express.json())

const CONNECTION_URL = 'mongodb+srv://lmckay:lmckay123@cluster0.qzesj.mongodb.net/cc?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));