const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`connected to Port ${PORT}`)
})

// Greeting routes

app.get('/greeting', (req, res) => {
    res.send(`<h1>Hello, stranger.</h1>`)
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`<h1>Hello, ${name}.</h1>`)
})
// Tip routes

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseInt(req.params.total)
    const tipPercentage = parseInt(req.params.tipPercentage) / 100
    const result = total * tipPercentage
    res.send(`The tip amount is $${result}`)
})

// Magic 8 Ball

const magic8BallResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req, res) => {
    const randNum = Math.floor(Math.random() * magic8BallResponses.length) + 1
    res.send(`<h1>${req.params.question}</h1><p>${magic8BallResponses[randNum]}</p>`)
    
})
