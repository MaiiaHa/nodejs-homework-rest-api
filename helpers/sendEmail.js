const nodemailer = require("nodemailer");
require("dotenv").config();
const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // could be 25, 465, 2525
  secure: true,
  auth: {
    user: "maiia.robeiko@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: "vijahem381@v1zw.com",
  from: "maiia.robeiko@meta.ua",
  subject: "test email",
  html: "<p><strong>Test email </strong>from localhost:3000</p>",
};

transport
  .sendMail(email)
  .then(() => console.log("Email send success"))
  .catch((error) => console.log(error.message));

// ===== 1v via Sendgrid https://app.sendgrid.com/
// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// const { SANDGRID_API_KEY } = process.env;

// sgMail.setApiKey(SANDGRID_API_KEY);

// const sendEmail = async (data) => {
//   const email = { ...data, from: "maiia.robeiko@ukr.net" };
//   await sgMail.send(email);
//   return true;
// };

// module.exports = sendEmail;

// ===== can be used

// const email = {
//   to: "vijahem381@v1zw.com",
//   from: "maiia.robeiko@ukr.net",
//   subject: "test email",
//   html: "<p><strong>Test email </strong>from localhost:3000</p>",
// };

// sgMail
//   .send(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));
