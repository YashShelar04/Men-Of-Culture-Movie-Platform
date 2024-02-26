const express = require('express')
const app=require('./app')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
const port = process.env.PORT

app.get('/Home',(req,res)=>{
    res.sendFile('./public/index.html', { root: __dirname });
}).get('/About',(req,res)=>{
    res.sendFile('./public/about.html', { root: __dirname });
}).get('/Contact',(req,res)=>{
    res.sendFile('./public/contact.html', { root: __dirname })
})

app.listen(port,(req,res)=>{
    console.log('Server is listening....')
})