var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'murugesanir1997@gmail.com',
    pass: 'Mugesh@123*'
  }
});

var mailOptions = {
  from: 'murugesanir1997@gmail.com ',
  to: 'murugesanir1997@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

define('WP_HOME','http://tamilnaduyoungachieversbookofrecords.com/');
define('WP_SITEURL','http://tamilnaduyoungachieversbookofrecords.com/');