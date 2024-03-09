import Emailer from "../services/email.mjs";

class MailController {
  emailer;

  constructor(emailer) {
    this.emailer = emailer;
  }

  store = async (req, res) => {
    try {
      const response = await this.emailer.send({
        data: req.body,
        template: "lead",
      });
      return res.status(200).send(response);
    } catch (e) {
      console.log(e);
      return res.status(404);
    }
  };
}

export default new MailController(Emailer);
