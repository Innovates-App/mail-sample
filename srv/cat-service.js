import nodemailer from "nodemailer";
import "dotenv/config"

const user_mail = process.env.EMAIL_USER;
const user_password = process.env.EMAIL_PASSWORD;

class Catalog extends cds.ApplicationService {

    init() {

        const { Books } = this.entities()

        this.on('handleNotification', async req => {

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: user_mail,
                    pass: user_password,
                },
            })


            const mailOptions = {
                to: process.env.EMAIL_USER,
                from: process.env.EMAIL_USER,
                subject: 'CAP Email',
                text: 'This is a test mail from CAP'
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                    return 'Email sending failed';
                }
                console.log('Email sent: ' + info.response);
                return 'Email sent successfully';
            });

        })

    }

}

export default Catalog