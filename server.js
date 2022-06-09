const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
//stopped at 00:27:47 Let's Build a Field Guide to Aliens! #100Devs
app.use(cors());

const aliens = {
  
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html') // when at the homepage '/' send over the index.html file 
});

app.get('/api/:alienName', (req, res) => {
  const alienName = req.params.alienName.toLowerCase();
  // if(aliens[alienName]) {
  //   res.json(aliens[alienName]);
  // } else {
  //   res.json(aliens['humans']);
  // }
  if(Object.hasOwn(aliens, alienName)) {
    res.json(aliens[alienName]);
  } else {
    res.json(aliens['humans']);
  }
});

app.listen(processs.env.PORT || PORT, () => {
  console.log('Server is running.');
});