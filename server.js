
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false, 
      },
});

app.post("/api/contact", (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({ error: "All Fields are required" });
    }

    const adminHtml = `
        <div style="padding: 20px ; color: #333">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong>${name}</p>
            <p><strong>Email:</strong>${email}</p>
            <p><strong>Phone:</strong>${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
        `;

    const userHtml = `
        <div style="padding: 20px ; color: #333">
            <h2>New Contact Form Submission</h2>
            <p>Dear ${name}</p>
            <p>Thank you for Contacting</p>
        </div>
        `;
    const adminMailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `${subject}`,
        html: adminHtml,
    };

    const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank You for Contacting",
        html: userHtml,
    };

    transporter.sendMail(adminMailOptions, (error, info) => {
        if(error){
            console.error('Error sending email to admin:', error);
            return res.status(500).json({ error: 'Failed to send emil to admin'})            
        }

        console.log('Admin email sent:', info.response);

        transporter.sendMail(userMailOptions, (error, info) => {
            if(error){
                console.error('Error sending acknowledgment email to user:', error);
                return res.status(500).json({ error: 'Failed to send acknowledgment email.'})
            }

            console.log('Acknowledgment email sent:', info.response);
            res.status(200).json({success: true, message: 'Email Sent Successfully'})
            
        })
        
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})