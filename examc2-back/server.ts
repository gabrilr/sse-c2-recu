
import express, {Request, Response} from 'express';
import cors from 'cors';
const app = express()

// Middlewares
app.use(cors());
app.use(express.json());

const message: String[] = [];

app.get('/mensaje', (req, res) => {
    
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    setInterval(() => {
        
        res.write(`data: ${JSON.stringify({message})}\n\n`);
        
    }, 1000);
});

app.post('/mensaje', (req, res) => {
    var { perfil, mensaje} = req.body;
    
    console.log(perfil+' : '+mensaje);
    message.push(perfil+':'+mensaje);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
