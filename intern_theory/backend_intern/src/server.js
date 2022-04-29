
const app = require('./index')
const Port = process.env.PORT || 2001
const connect = require('./configs/db')

// connecting 
 app.listen(Port, async() =>{
    try{

       await connect()
    console.log(`listening on ${Port}`)

    }catch(err){console.log(err)}
})

