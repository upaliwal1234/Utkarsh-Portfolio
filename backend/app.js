const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const path = require('path')
const nodemailer = require('nodemailer')

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

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: process.env.PROTON_USERNAME,
        pass: process.env.PROTON_PASSWORD,
    }

});

app.post("/send-email", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const mailOptions1 = {
            from: process.env.PROTON_USERNAME,
            to: process.env.ADMIN_EMAIL,
            subject: 'PORTFOLIO API TEST',
            html: `<strong>${name} wants to get in touch with you! it works!</strong> <br> <p> ${message} </p> <br> <h4>Contact him at: ${email} </h4>`
        };

        const data = await transporter.sendMail(mailOptions1);
        const mailOptions2 = {
            from: process.env.PROTON_USERNAME,
            to: email,
            subject: `Thanks! Utkarsh Paliwal will contact you soon.`,
            html: `<h1> Hey ${name}! Thanks for visiting my website. </h1> <br> <h3> I will contact you soon. </h3>`
        }

        const data2 = await transporter.sendMail(mailOptions2);
        res.status(200).json({ "1": data, "2": data2 });
    } catch (error) {
        res.status(400).json(error);
    }
});


const PORT = process.env.PORT;
app.listen(PORT, (e) => {
    console.log(`server is running at http://localhost:${PORT}`);
})