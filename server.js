const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Konfigurasi Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // atau gunakan service email lain
    auth: {
        user: 'artanew268@gmail.com', // ganti dengan email Anda
        pass: 'artaneww345' // ganti dengan password email Anda
    }
});

app.post('/order', (req, res) => {
    const { name, email, menu, quantity } = req.body;
    console.log('Pesanan diterima:', req.body);

    // Kirim email ke penjual
    const mailOptions = {
        from: 'artanew268@gmail.com', // ganti dengan email Anda
        to: 'artanew268@gmail.com', // ganti dengan email penjual
        subject: 'Pesanan Baru',
        text: `Nama: ${name}\nEmail: ${email}\nMenu: ${menu}\nJumlah: ${quantity}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Terjadi kesalahan saat mengirim email');
        } else {
            console.log('Email terkirim: ' + info.response);
            res.json({ message: 'Pesanan berhasil diterima dan email terkirim', order: req.body });
        }
    });
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Pesan diterima:', req.body);

    // Kirim email ke penjual
    const mailOptions = {
        from: 'artanew268@gmail.com', // ganti dengan email Anda
        to: 'artanew268@gmail.com', // ganti dengan email penjual
        subject: 'Pesan Baru dari Kontak',
        text: `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Terjadi kesalahan saat mengirim email');
        } else {
            console.log('Email terkirim: ' + info.response);
            res.json({ message: 'Pesan berhasil diterima dan email terkirim', contact: req.body });
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});