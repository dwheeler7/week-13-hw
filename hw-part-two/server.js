const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

let numBottles = 99

app.get('/', (req, res) => {
    res.send(`<h1>${numBottles} bottles of beer on the wall...</h1>    
    <p><a href="/${numBottles -1}">Take one down and pass it around.</a></p>`)  
})

app.get('/:number_of_bottles', (req, res) => {
    numBottles = req.params.number_of_bottles
    if (numBottles > 0) {
        res.send(`<h1>${numBottles} bottles of beer on the wall...</h1>    
    <p><a href="/${numBottles -1}">Take one down and pass it around.</a></p>`)
    } else {
        res.send(`<h1>${numBottles} bottles of beer on the wall...</h1>
        <p><a href="/99">Start over.</a></p>`)
    }
    
})

app.listen(PORT, ()=> {
    console.log(`listening on PORT ${PORT}`)
})