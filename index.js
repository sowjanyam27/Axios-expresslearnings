const express  = require('express')

const app = express()

const port = 3000

app.get(
    '/json',
    (request , response ) => {
        const days = {
            yesterday : "servers",
            today : "clients"
        }
        response.send(days)
        console.log('Data sent')
    }
)
app.listen(
    port,
    () => {
        console.log(`listening on ${port}`)
    }
)
