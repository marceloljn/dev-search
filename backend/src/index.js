const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/week10', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3232);
