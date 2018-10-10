import express from 'express'

let app = express();

app.listen(3000, ()=>{
    console.log('Server started on port 3000...');   
})