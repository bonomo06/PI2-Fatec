import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

const allowedOrigins = [
    'http://localhost:3000',       // Origem usada no ambiente local
    'https://denguefatec.vercel.app', // Origem usada no ambiente de produção
];

app.use(cors({
    origin: (origin, callback) => {
        // Permite requisições sem origem (ex: Postman) ou de origens permitidas
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Não permitido pelo CORS'));
        }
    }
}));

app.use(express.json())

app.use('/api',routes)

app.listen(PORT,()=>{
    console.log(`Rodando em http://localhost:${PORT}`)
})