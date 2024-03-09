import nodemailer from "nodemailer";
import Email from "email-templates";
import path from "path";
import { fileURLToPath } from "url";

class Emailer {
  emailer;
  __filename = fileURLToPath(import.meta.url);
  __dirname = path.dirname(this.__filename);

  constructor() {
    let extraPath = "";

    const nodemailerTransport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT.toString()),
      secure: process.env.SMTP_SECURE === "true", // upgrade later with STARTTLS
      pool: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    this.emailer = new Email({
      message: {
        from: process.env.FROM_EMAIL,
      },
      juice: true,
      juiceResources: {
        preserveImportant: true,
        webResources: {
          //
          // this is the relative directory to your CSS/image assets
          // and its default path is `build/`:
          //
          // e.g. if you have the following in the `<head`> of your template:
          // `<link rel="stylesheet" href="style.css" data-inline="data-inline">`
          // then this assumes that the file `build/style.css` exists
          //
          relativeTo: path.join(
            this.__dirname,
            extraPath,
            "..",
            "emails",
            "styles"
          ),
          //
          // but you might want to change it to something like:
          // relativeTo: path.join(__dirname, '..', 'assets')
          // (so that you can re-use CSS/images that are used in your web-app)
          //
        },
      },

      // uncomment below to send emails in development/test env:
      send: true,
      transport: nodemailerTransport,
      preview: false,
    });
  }

  send = async ({ data, template }) => {
    try {
      const response = await this.emailer.send({
        template,
        message: {
          to: process.env.TO_EMAIL,
          from: {
            name: "demenagementabordable.com",
            address: process.env.TO_EMAIL,
          },
          replyTo: {
            name: data.name,
            address: data.email,
          },
        },
        locals: {
          data,
        },
      });

      console.log("Email Sent", data.name, template, Date.now());

      return response;
    } catch (e) {
      console.error("Send Error", e);
    }
  };
}

const emailer = new Emailer();

export default emailer;
