emailjs.init("zoonWG4Iy1d8NHZyc");

$('#btnSubmit').click(function(event) {

    var templateParams = {
        message: "check account",
        to_email: 'thamndph15221@fpt.edu.vn'
    };


    emailjs.send('service_o3xkrqq', 'template_f2mji4p', templateParams )
    .then(function(response) {
        console.log('Email sent successfully', response);
        $('#response').text('Email sent successfully');
    }, function(error) {
        console.error('Error sending email', error);
        $('#response').text('Error sending email');
    });
});
