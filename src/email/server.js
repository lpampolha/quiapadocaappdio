const express = require('express')
const app = express()
const port = 3001
const nodemailer = require('nodemailer')
const cors = require('cors')

app.use(cors())
app.use(express.json())

// OBS
// FAZER UM CONTA NO MAILTRAP PARA TESTAR E ENVIO DO E-MAIL
// https://mailtrap.io/

app.post('/email', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "609add8964d313", // password servidor smtp
            pass: "27ca16b861e77f" // password servidor smtp 
        }
    })


    const mailOptions = {
        from: req.body.email,
        to: 'testeinfnet2020@gmail.com',
        subject: `Esse é um email teste ${req.body.name} `,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('#### ERROR =>', error)
            res.json({ type: 'danger', message: 'Erro eo enviar o e-mail', data: error })
        } else {
            res.json({
                type: 'success',
                message: 'E-mail enviado com sucesso',
                data: info.respo
            })
        }
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
