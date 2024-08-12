// import { IncomingMessage, ServerResponse } from 'http';
// import nodemailer from 'nodemailer';

// export default async (req: IncomingMessage, res: ServerResponse) => {
//   if (req.method !== 'POST') {
//     res.statusCode = 405;
//     res.end('Method Not Allowed');
//     return;
//   }

//   let body = '';
//   req.on('data', (chunk) => {
//     body += chunk.toString();
//   });

//   req.on('end', async () => {
//     const { name, email, message } = JSON.parse(body);

//     // تكوين معلومات المرسل
//     let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'yourcompanyemail@gmail.com',
//         pass: 'yourpassword',
//       },
//     });

//     // تكوين البريد الإلكتروني
//     let mailOptions = {
//       from: email,
//       to: 'yourcompanyemail@gmail.com',
//       subject: `رسالة جديدة من ${name}`,
//       text: message,
//     };

//     // إرسال البريد الإلكتروني
//     try {
//       await transporter.sendMail(mailOptions);
//       res.statusCode = 200;
//       res.end(JSON.stringify({ message: 'تم إرسال البريد الإلكتروني بنجاح!' }));
//     } catch (error) {
//       console.error(error);
//       res.statusCode = 500;
//       res.end(JSON.stringify({ error: 'حدث خطأ أثناء إرسال البريد الإلكتروني.' }));
//     }
//   });
// };