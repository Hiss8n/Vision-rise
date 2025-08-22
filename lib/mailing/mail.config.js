require('dotenv').config()
import nodemailer from "nodemailer"



 export const sendEmailOrder=async(options)=>{

    const transporter= nodemailer.createTransport({
        host: "smtp.gmail.com",
      port: 465,
      secure: true,
        service:'gmail',
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        },
        pool:true
    })

    const mailOptions={
        from:options.from,
        to:process.env.EMAIL_USER,
        subject:options.subject,
        html:options.html,
        category:options.category || 'Contact'
    }


    await transporter.sendMail(mailOptions)

}


 export const sendAutomaticResponseEmail=async(options)=>{

    const transporter= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions={
        from:process.env.EMAIL_USER,
        to:options.to,
        subject:options.subject,
        html:options.html,
        category:options.category || 'Automatic responses'
    }


    await transporter.sendMail(mailOptions);

}

