const express = require('express');
const users = require('./dataBase');
const { default: test } = require('node:test');


const app = express();

app.get('/users', (req, res) => {
  console.log(req);

  res.json('test');
});

app.get('/users/:userId', (req, res) => {
  try {
    console.log(req.params);

  const { userId } = req.params;
  const user = users[userId - 1];
  
  if (!user) {
    res.status(404).json('User not found');
    return;
  }

  res.json(user);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.put('/users', (req, res) => {
  console.log(req);

  res.json('test');
});

app.delete('/users', (req, res) => {
  console.log(req);

  res.json('test');
});

app.post('/users', (req, res) => {
  console.log(req);

  res.json('test');
});

app.listen(5000, () => {
  console.log('listen 5000');
});
