import nodemailer, { Transporter } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';

class SendMailService {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then((account) => {
      // Create a SMTP transporter object
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
      this.client = transporter;
    });
  }

  async execute(to: string, subject: string, variables: object, path: string) {
    const templateFileContent = fs.readFileSync(path).toString('utf-8');

    const mailTemplateParser = handlebars.compile(templateFileContent);

    const html = mailTemplateParser(variables);

    const message = await this.client.sendMail({
      to,
      subject,
      html,
      from: 'NPS <noreplay@nps.com.br>',
    });

    // eslint-disable-next-line no-console
    console.log('Mensagem enviada: %s', message.messageId);
    // Visualização disponível apenas ao enviar por meio de uma conta Ethereal
    // eslint-disable-next-line no-console
    console.log('URL de visualização: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default new SendMailService();
