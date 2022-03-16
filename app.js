//-------------task number two-----------------------//
const express = require('express')

const { cookie, get, render } = require('express/lib/response')

const app = express()

app.set('view engine', 'ejs')

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use( express.urlencoded({extended:true}) )

// let messages =[]

// app.get('/', (req, res)=>{
//     res.render('index')
// })

// app.get('/userName',(req, res)=>{
//     res.render('username')
// })

// app.post('/chat', (req, res)=>{
//     let name = req.body.uname
//     res.cookie('userName', `${name}`)
//     res.render('chat', {messages: messages})
// })

// app.get('/chat', (req, res)=>{
//     res.render('chat', {messages: messages})
// })

// app.get('/messages', (req, res)=>{
//     res.render('chat', {messages: messages})
// })
// app.post('/messages', (req, res)=>{
//     let mes = req.body.umessage
//     messages.push({
//         author: req.cookies.userName,
//         message: req.body.umessage,
//         time: Date.now()
//     })
//     res.redirect( '/chat')
//     //res.send({computer:'MyComputer',ip:'192.168.0.1'});
// })

// app.get('/messages/:time', (req, res)=>{
//     let timeStamp= req.params.time
//     let result = messages.filter( ({ time }) => time == timeStamp);
//      messages = result
//     res.render('chat', {messages: messages})
// })

// app.listen(8000)
//------------- insult ------------------//

const fs = require("fs");


app.get('/', (req ,res)=>{
    const jsonData = fs.readFileSync('./views/insults.json', {encoding: 'utf8'})
    const data= JSON.parse(jsonData)
    res.render('index' ,{data})
})

app.get('/insult',(req, res)=>{
        const jsonData = fs.readFileSync('./views/insults.json', {encoding: 'utf8'})
        const data= JSON.parse(jsonData)
        const object = data
        const rand = Math.floor(Math.random() * Object.keys(object).length);
        const randKey = object[rand]
        let result = randKey
        res.render('randinsults', {result})
})
app.get('/insult/:severity',(req, res)=>{
    const jsonData = fs.readFileSync('./views/insults.json', {encoding: 'utf8'})
    const data= JSON.parse(jsonData)
    let resul= req.params.severity
    let result = data.filter( ({ severity }) => severity == resul);
    res.render('insult', {result: result})
})

app.get('/insults', (req, res)=>{

    res.render('newinsults')
})

app.post('/insults', (req,res)=>{
    const {insult,author,severity}= req.body
    let id = Math.floor(Math.random() * 100);
    let jsonData = fs.readFileSync('./views/insults.json', {encoding: 'utf8'})
    let insults = JSON.parse(jsonData)
    insults.push({
        id, insult, author, severity
    })
    fs.writeFileSync('./views/insults.json', JSON.stringify(insults))
    res.redirect('/')
})
app.get('/insults/:id', (req, res)=>{
    let id = req.params.id
    let jsonData = fs.readFileSync('./views/insults.json', {encoding: 'utf8'})
    let insults = JSON.parse(jsonData)
    const data = insults.find(result => result.id == id)
    console.log(data)
    res.render('updateinsult', {data})
})

app.post('/insults/:id', (req, res)=>{
    const {insult,author,severity}= req.body
    let id = req.params.id
    let jsonData = fs.readFileSync('./views/insults.json', {encoding: 'utf8'})
    let insults = JSON.parse(jsonData)
    const data = insults.findIndex(result => result.id == id)
        insults[data].id = id
        insults[data].insult = insult
        insults[data].author = author
        insults[data].severity = severity
    fs.writeFileSync('./views/insults.json', JSON.stringify(insults))
    res.redirect('/')
})
app.listen(8000)

// -------------cookie counter --------------------//
// let total = 0
// app.get('/', (req , res)=>{
//     res.render('index')
// })
// app.use('/', (req, res, next)=>{ 
//     res.cookie('total', `${total}`)
//     next()
//   })
// app.get('/user1', (req, res)=>{
//    total =  req.cookies.total
//    total++
// res.render('user1', {total: total})
// })
// app.get('/user2', (req, res)=>{
//     total =  req.cookies.total
//     total++
//     res.render('user2', {total: total})
// })

// app.listen(8000)

//---------------cookies ----------------------//
// app.use('/', (req, res, next)=>{
//     res.cookie('cookie', 'express');
//     next()
// })

// app.get('/', (req , res)=>{
//     console.log(JSON.stringify(req.headers));
//     res.render('index')
// })

//----------midleware ---------------------//
// app.use('/', (req, res, next)=>{
//     console.log('Request Type:', req.method)
//     next()
// },(req, res, next)=>{
//     console.log('Request URL:', req.originalUrl)
//     next()
// })

///-----------calculator----------------//

// app.get('/', (req, res) =>{
//     let result = 0
//     let value1 = parseInt(req.query.value1)
//     let value2 = parseInt(req.query.value2)
//     let operator = req.query.operator
//     switch(operator){
//     case 'plus':
//     result = value1 +value2
//     break
//     case 'minus':
//     result = value1 - value2
//     break
//     case 'mulitple':
//     result = value1 * value2
//     break
//     case 'minus':
//     result = value1 / value2
//     break
//     default:
//         result = " Put the value and Chose som one opreater to perform Calculation"
//     break
//     }
//     res.render('form', {result: result})
// })
// app.listen(8000)
/// --------------------------------////

// app.get('/' , (req, res) =>{
//     res.render('./index')
// })

// app.get('/name' , (req, res) =>{
//     res.render('./name')
// })

// app.get('/contact' , (req, res) =>{
    
//     res.render('./contact', {name : article})
// })
// app.listen(8000)

//------------- task number one -----------------------///

// const express = require('express')
// const app = express()
// app.get('/', (req, res) =>{
//     res.sendFile('index.html', { root: __dirname });
// })
// app.listen(8000)
