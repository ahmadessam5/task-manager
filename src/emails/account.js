const sgMail = require ('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'mado74.ar@gmail.com',
//     from: 'ahmed.essam9618@gmail.com',
//     subject:'this is my first mail',
//     text: 'i hope this find you good'
// })

const sendWelcomeEmail = ( email, name ) => {
    sgMail.send({
        to: email,
        from: 'ahmed.essam9618@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: 'ahmed.essam9618@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}