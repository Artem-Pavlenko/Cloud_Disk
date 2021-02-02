const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

const PORT = config.get('serverPort')

const start = async () => {

    try {

        await mongoose.connect(config.get('dbUrl'), {
            // эти параметры нужны чтобы наш connect успешно работал
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => {
            console.log('Server started on port:', PORT)
        })
    } catch (e) {
        console.log('Error:',e)
    }
}

start()