const express = require("express");
const config = require("config")
const mongoose = require("mongoose")

const app = express();

app.use(express.json({extended: true }))

app.use('/api/auth', require('./routes/auth_routes'))
app.use('/api/doissier', require('./routes/dossier_router'))
app.use('/api/doissierList', require('./routes/doissier_list_router'))
app.use('/api/create', require('./routes/registeredUser'))

const PORT = 4000

async function start(){
    try {
        await mongoose.connect(config.get('mongoUrl'),{
            useNewUrlParser: true
        })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e.message)
    }
}

start()

