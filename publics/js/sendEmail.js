emailjs.init("zoonWG4Iy1d8NHZyc");

$('#btnSubmit').click(function(event) {

    event.preventDefault()  ;

    var userName = $("#user-name").val();
    var phoneNumber = $("#phone-number").val();
    var address = $("#address").val();
    var appointmentDate = $("#input-buy-home").val();
    var locationValue = $("#location").html();

    const message = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <style>
                p{
                    margin-bottom: 0;
                }
            </style>
        </head>
            <body>
                <p><b>Địa chỉ phòng:</b> ${locationValue}</p>
                <p><b>Họ và tên:</b> ${userName}</p>
                <p><b>Ngày hẹn:</b> ${appointmentDate}</p>
                <p><b>Số điện thoại:</b> ${phoneNumber}</p>
                <p><b>Địa chỉ tìm phòng:</b> ${address}</p>
            </body>
        </html>
    `

    var templateParams = {
        message: message,
    };

    emailjs.send('service_l5dq556', 'template_f2mji4p', templateParams )
        .then(
            function(response) {
                toastr.success('Gửi thông tin thành công!');
            }, 
            function(error) {
                return toastr.error("Gửi thông tin không thành công!");
            }
        );
});
