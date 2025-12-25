import express from 'express';
import dotenv from 'dotenv';

import leadRoutes from './routes/leadRoutes.js';


dotenv.config();

const app = express();

app.use(express.json());

app.use('/leads', leadRoutes);

// tornando público a pasta 'public', contudo isso no navegador não é para ser assim
app.use(express.static('public'));



const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);

});






