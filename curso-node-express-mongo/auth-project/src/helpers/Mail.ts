import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';
import hbsConfig from '../config/hbs';

const nodemailerhbs = require('nodemailer-express-handlebars');


class Mail {
    transporter: any;

    constructor() {
        const {host, port, secure, auth} = mailConfig;

        this.transporter = nodemailer.createTransport({
            host: mailConfig.host,
            port: mailConfig.port,
            secure: false,
            auth: {
                user: mailConfig.auth.user,
                pass: mailConfig.auth.pass
            },
            tls: { rejectUnauthorized: false }
        })

        this.configureTemplates();
     }

    configureTemplates(){
        this.transporter.use(
            'compile', 
            nodemailerhbs(hbsConfig)
        )
    }

    sendMail(data: any) {
        console.log(data);
        this.transporter.sendMail(data);
    }

   
}

export default new Mail;