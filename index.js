const express = require('express');                     
const app = express();                                  
const path = require('path');

app.set('port',process.env.PORT || 3000);           
app.use(express.json());    
app.use(express.static(path.join(__dirname, './public')));   

app.listen(app.get('port'), function(){                  
  console.log(`Server on port ${app.get('port')}`);    
});
/*
git notes

git init
git add README.md //optional
git commit -m "anything comment"
git remote add origin https://github.com/Z1K3C/"name of your repository"
git push -u origin master

*/