$('#submitMessage').on('click', function () {
    let name = $('#name').val();
    let mobile = $('#mobile').val();
    let email = $('#email').val();
    let message = $('#message').val();

    if (name === '' || mobile === '' || email === '' || message === '') {
        $('.alert-dismissible').hide();
        $('.error_submit').show();
        $('.error_submit').html("Please fill all the fields");
    } else {
        $('.alert-dismissible').hide();
        $.ajax({
            type: "POST",
            dataType: "JSON",
            url: "./assets/backend/common.php",
            data: {
                mode: "common",
                email: email,
                name: name,
                mobile: mobile,
                message: message,
            }
        }).done(function (res) {
            if(res.status){
                $('#name').val('');
                $('#mobile').val('');
                $('#email').val('');
                $('#message').val('');
                $('.success_submit').show();
                $('.success_submit').html(res.msg);
            }else {
                $('.error_submit').show();
                $('.error_submit').html(res.msg);
            }
        });
    }
});


$("#resetMessage").on('click',function () {
    $('.alert-dismissible').hide();
    $('#name').val('');
    $('#mobile').val('');
    $('#email').val('');
    $('#message').val('');
});
