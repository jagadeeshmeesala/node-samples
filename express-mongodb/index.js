const express = require('express');
const mongo = require('mongodb').MongoClient;
const port = 3000;

const app = express();

const users = {};

// middleware
app.use((req,res,next) => {
  //console.log(req.headers);
  next();
});

// default router get
app.get('/', (request,response) => {
  response.status(200).send(users);
});

// post api
app.post('/SaveUser', (req,res) => {
  //req.headers('content-type','application/json');
  let user = req.body;
console.log(req);
  // initiate mongodb connection
  let response = {};
  mongo.connect('mongodb://localhost:27017/test', (err, db) => {
      if(err){
        throw Error();
      }

      db.collection('users').insertOne(user, (err, result) => {
          if(err){
            throw Error();
          }

          console.log(result);
          response = result;
      });

      db.close();
  });

res.status(200).send(response);
});


app.listen(port, err => {
  if(err){

    throw new Error();
  }
  console.log('server is listening at ${port}');
});

app.use((err,req,res,next) => {
  //console.log('some thing broke', err.stack());

  res.status(500).send('Some thing broke' + err.stack);
});
