import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, message, phoneNumber } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
    secure: true,
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL_USER,
      subject: `Contact form submission from ${firstName} ${lastName}`,
      html: `<p>You have a new contact form submission</p>
      <p><strong>First Name:</strong>${firstName}</p><br>
      <p><strong>Last Name:</strong>${lastName}</p><br>
      <p><strong>Email:</strong>${email}</p><br>
      <p><strong>Phone:</strong>${phoneNumber}</p><br>
      <p><strong>Message:</strong>${message}</p><br>
      `,
    });
    // console.log('Message Sent', emailRes.messageId);
  } catch (err) {
    console.error(err);
  }

  res.status(200).json(req.body);
}
