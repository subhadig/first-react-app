var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/', (request, response)=> {
  response.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(3000, (err)=> {
  if(err) {
    console.log('Error running server:', err);
  }
  console.log('Server is running on port 3000');
})
