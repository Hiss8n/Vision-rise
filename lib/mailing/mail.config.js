import nodemailer from "nodemailer"



const sendEmailOrder=async(options)=>{

    const transporter= nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL_USER,
            pass:EMAIL_PASSWORD
        }
    })

    const mailOptions={
        from:options.from,
        to:process.env.EMAIL_USER,
        subject:options.subject,
        hmtl:options.hmtl,
        category:options.category || 'Orders'
    }


    await transporter.sendMail(mailOptions)

}

export default sendEmailOrder