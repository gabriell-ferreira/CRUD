const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

const uri = 'mongodb+srv://admin:admin@crud-2z4t0.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('servidor conectado à porta 3333, acesse: http://localhost:3333.');
})