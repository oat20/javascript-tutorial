var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'phmahidol1@gmail.com',
        pass: '023547354'
    }
});

var mailOptions = {
    from: 'phmahidol1@gmail.com',
    to: 'iceeagle99@gmail.com',
    subject: 'Sending Email using Node.js',
    //text: 'That was easy!'
    html: '<h1>That was easy!</h1>'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});