const express = require('express');
const port = 3000;

const app = express();

const users = {};

// middleware
app.use((req,res,next) => {
  console.log(req.headers);
  next();
});

// default router get
app.get('/', (request,response) => {
  response.status(200).send(users);
});

// post api
app.post('/SendUser', (req,res) => {
  let user = req.body;
  users.push({
    name: user.username,
    password: user.password
  });

res.status(200).send('Saved successfully');
});


app.listen(port, err => {
  if(err){

    throw new Error();
  }
  console.log('server is listening at ${port}');
});

app.use((err,req,res,next) => {
  //console.log('some thing broke', err.stack());

  res.status(500).send('Some thing broke');
});
