const nodemailer = require("nodemailer");
import { NextResponse } from "next/server";

const {user, pass} = process.env

const transporter = nodemailer.createTransport({
  host: 'smtp.titan.email',
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: user,
    pass: pass
  }
});


export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const info = await transporter.sendMail({
      from:user, // sender address
      to: email, // list of receivers
      subject: "Thank you for contacting us!", // Subject line
      html: 
      `<div style="background-color: #010b13; color: white; padding: 2rem">
      <div style="margin: auto; width: 50%">
        <h1 style="color: #d3429e">Thank you for getting in touch!</h1>
        <div style="margin-bottom: 4rem">
          <p style="font-size: large; margin-bottom: 4rem">
            We appreciate you contacting us. We will get back to you shortly.
          </p>
          <div>
            <img
              style="margin-bottom: 4rem; color: #3f185e"
              src="https://www.oussema.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.971c81c1.png&w=48&q=75"
              width="80"
              height="80"
            />
          </div>
          <a
            style="
              margin-bottom: 4rem;
              text-decoration: none;
              padding: 0.75rem 1.2rem;
              background: #3f185e;
              color: #FFFFFF;
              cursor: pointer;
              border: 1px solid #d3af37;
              border-radius: 0.4rem;
            "
            href="https://oussema.live"
            target="_blank"
            >Back to Website
          </a>
        </div>
        <div style="margin-bottom: 2rem">
          <div style="margin-top: 2rem">
            <b>Have a great day!</b>
          </div>
          <small style="color: #dd4aad">Oussema Bouchoucha</small>
        </div>
      </div>
    </div>`
    });
    
    const info2 = await transporter.sendMail({
      from:user, // sender address
      to: user,
      subject: "New message submitted:", // Subject line
      html: 
    `Email: ${email} <br/> Subject: ${subject} <br/> Message: ${message}`
    })

    console.log("Message sent: %s", info2.messageId);
    return NextResponse.json(info);

  } catch (error) {
    console.log('error send message :',error);
    return NextResponse.json({ error });
  }
}
