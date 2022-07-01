const express = require('express');
const logger = require('morgan'); // логує в консоль статус-код запиту і маршрут по якому відбувся запит
const cors = require('cors'); // пакет для створення мідлвер, що дозволяє кросдоменні запити

const contactsRouter = require('./routes/api/contacts');
const authRouter = require('./routes/api/users');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'; // режим роботи логера

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/users', authRouter);
app.use('/api/contacts', contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
