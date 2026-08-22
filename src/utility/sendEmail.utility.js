import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const sendEmail = async ({ to, subject, text, html }) => {
    const info = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject,
        text,
        html,
    });

    console.log("Message sent:", info.messageId);

    return info;
};

export default sendEmail;