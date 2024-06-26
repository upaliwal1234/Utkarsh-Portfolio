const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const path = require('path')

dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());


// -------------Deployment----------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname1, './frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname1, "./frontend", "dist", "index.html"));
    })
}
else {
    app.get('/', (req, res) => {
        res.send('API is running successfully');
    })
}

// -------------Deployment----------------


const PORT = process.env.PORT;
app.listen(PORT, (e) => {
    console.log(`server is running at http://localhost:${PORT}`);
})