const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nbtr@mssm.edu',
        subject: 'Welcome to the Task App!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nbtr@mssm.edu',
        subject: 'Account Closed',
        text: `${name}, we're sorry to see you go. We're constantly trying to improve so if there's something we could have done better, please let us know!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}