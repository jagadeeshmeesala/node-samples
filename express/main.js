const express = require('express');
//const http = require('http');

const app = express();

const users = {};

app.get('/', (request,response) => {
  response.status(200).send(users);
});

app.post('/SendUser', (req,res) => {
  let user = req.body;
  users.push({
    name: user.username,
    password: user.password
  });

res.status(200).send('Saved successfully');
});

const port = 3000;
app.listen(port, err => {
  if(err){
    console.log('Something bad happened' + err.stack())
  }
  console.log('server is listening at ${port}');
});
