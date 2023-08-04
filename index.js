const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());
const users=[
    {id:1,name:'siam'},
    {id:2,name:'sumai'},
    {id:3,name:'tithi'},

]
app.get('/',(req,res)=>{
    res.send('Users Managment server is running');
})
app.get('/users',(req,res)=>{
    res.send(users)
})
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});