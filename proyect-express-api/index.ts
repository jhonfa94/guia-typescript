import express from 'express'
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.status(201).json({
        ok: true,
        msg: "peticion ok",
        id: 1
    })
    // res.json({
    //     ok: true,
    //     msg: "Todo salio bien"
    // })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})