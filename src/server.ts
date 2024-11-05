import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: 'http://localhost:3000' // ou use '*' para permitir todas as origens temporariamente
}));

app.use(express.json())

app.use('/api',routes)

app.listen(PORT,()=>{
    console.log(`Rodando em http://localhost:${PORT}`)
})