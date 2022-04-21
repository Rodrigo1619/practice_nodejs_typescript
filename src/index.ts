import express from 'express'
const app = express()
app.use(express.json()) //hace que la req.body se transforme a un json

const PORT = 3000 

//si ponemos req en el parametro nos da un error por las configuraciones
//pero si ponemos un "_" ts tiene una excepcion y ya se soluciona
app.get('/ping', (_req, res) => {
    console.log('ping here ' + new Date().toLocaleDateString())
    res.send('pong')
})
app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})