const nodemailer = require("nodemailer");

export default async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '13jeff07@gmail.com',
          pass: 'blobkyjpqcpiosef',
        },
      })   

  const message = `
  Name: ${req.body.name}\r\n
  Mail: ${req.body.mail}\r\n
  Description: ${req.body.description}
`;

  const data = {
    from: '"Georgy Aslanyan" <13jeff07@gmail.com>',
    to: "georgiy.aslanyan13@mail.ru",
    subject: `New message from ${req.body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await transporter.sendMail(data);

  res.status(200).json({ status: "OK" });
};
