//-------------task number two-----------------------//
const express = require('express')

const { cookie } = require('express/lib/response')

const app = express()

app.set('view engine', 'ejs')

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use( express.urlencoded({extended:true}) )

app.get('/', (req ,res)=>{
    res.render('index')
})

app.listen(8000)
//-------------cookie counter --------------------//
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
