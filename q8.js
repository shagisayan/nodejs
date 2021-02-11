var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shagi@gmail.com',
    pass: '123456'
  }
});
var mailOptions = {
  from: 'shagi@gmail.com',
  to: 'info@uki.life',
  subject: ' “Testing my nodemailer module”',
  html:'<p>This is easy !</p>'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 