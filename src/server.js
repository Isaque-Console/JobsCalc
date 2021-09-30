const express = require("express") // biblioteca para criar o servidor
const server = express()
const routes = require("./routes")
const path = require("path")

// OBS: o .use serve para habilitar configuracoes nesse servidor

// usando template engine
server.set('view engine', 'ejs')

// mudar a localizacao da pasta views
server.set('views', path.join(__dirname, 'views'))

// habilitar arquivos statics
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes)
 
port = 3000
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
