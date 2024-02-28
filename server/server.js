const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
const routes = require('./routes.js');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const corsOrigin = process.env.CORS_ORIGIN || 'http://127.0.0.1:5173';
const corsOptions = { origin: corsOrigin, credentials: true, optionsSuccessStatus: 200 };

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
app.use(express.json());
app.use(cors(corsOptions));
app.use('/', routes);

const dbHost = process.env.DB_HOST;
mongoose.connect(dbHost);
mongoose.connection.on("error", console.error.bind(console, "could not establish connection with mongodb"))
mongoose.connection.once("open", () => {console.log("connected to mongodb\n")});
