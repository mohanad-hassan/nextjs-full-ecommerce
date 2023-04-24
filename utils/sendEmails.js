import nodemailer from "nodemailer";
import { activateEmailTemplate } from "../emails/activateEmailTemplate";


const transporter = nodemailer.createTransport({
  //process.env.MAIL_HOST,
  //port: 25,
  port: 465,
  host: "smtp.gmail.com",
  secure: true, // use SSL
  auth: {
    //      user: 'gomemahero@gmail.com',
    //  pass:'cplmletrtixvvpid'

    user: process.env.NODE_MAILER_EMAIL,
    pass: process.env.NODE_MAILER_PASS,
  },
});

export async function sendEmail( to, url, txt, subject, template ) {
  const emailOptions = {
    from: `mohanadhassan969696@gmail.com`,
    to: to,
    subject: `Contact Message from ${to}`,
    html: template(to, url),
  };

  return transporter.sendMail(emailOptions);
}


