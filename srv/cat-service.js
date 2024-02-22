import nodemailer from "nodemailer";
import "dotenv/config";

const user_mail = process.env.EMAIL_USER;
const user_password = process.env.EMAIL_PASSWORD;
const recipient_mail = process.env.EMAIL_RECIPIENT;

class CatalogService extends cds.ApplicationService {
  init() {
    const { Books } = this.entities();

    this.on("READ", Books, (a) => {
      a = 1;
    });

    this.on("sum", (somma) => {
      return (somma = "somma");
    });

    this.on("handleNotification", async (req) => {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: user_mail,
          pass: user_password,
        },
      });

      const mailOptions = {
        to: recipient_mail,
        from: user_mail,
        subject: "CAP Email",
        text: "This is a test mail from CAP",
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return "Email sending failed";
        }
        console.log("Email sent: " + info.response);
        return "Email sent successfully";
      });
    });
  }
}

export default CatalogService;
