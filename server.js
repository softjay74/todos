const express=require('express');
const app=express()
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});

app.use(bodyParser.json())

todos=["A", "B", "C"]

app.get('/api/hello', (req, res)=>{
    res.send({express : 'Hello from express'});
} )

app.get('/todos', (req, res)=>{

   // console.log(res.json(todos))
    return res.json(todos)
} )

app.post('/todos', (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    //console.log(req.body)
    todos.push(req.body.todo)
    console.log(todos)
    return res.json(todos)
} )

app.listen(port, () => console.log(`listening on port ${port}`))