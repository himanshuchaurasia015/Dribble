import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const sendMail=(email)=>{

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: email,
  subject: "Verification Code",
  html: '<p>Your Verification Link is </p> <a href="/">here!</a>'
});

}


module.exports=sendMail
