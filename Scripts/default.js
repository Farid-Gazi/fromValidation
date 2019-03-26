//___JavaScript validation   \n 
function JSValidate() {
    var isValid = true;
    if (document.getElementById('fname').value == "") {
        alert("First name is required!");
        isValid = false;
    }
    else if (document.getElementById('lname').value == "") {
        alert("Last name is required!");
        isValid = false;
    }
    else if (document.getElementById('email').value == "") {
        alert("Email is required!");
        isValid = false;
    }
    return isValid;
}

//___JQuery validation
function JQValidate() {
    var isValid = true;
    if ($("#fname").val().length == 0) {
        $("#fname").next(".error").html("First name is required").show();
        isValid = false;
    }
    if ($("#lname").val().length == 0) {
        $("#lname").next(".error").html("Last name is required").show();
        isValid = false;
    }
    if ($("#email").val().length == 0) {
        $("#email").next(".error").html("Email is required").show();
        isValid = false;
    }
    return isValid;
}

//___Async.html
function AsyncWork() {
    $('#show').click(function () {
        $('#slide1').fadeTo(3000, .3).promise().then(function () {
            $('#slide2').show();
            $('#slide3').slideDown(1000);
            $('#message').html('The time is Now ' + getTimeNow());
        });
    });
    $('#ok').click(function () {
        $('#slide3').slideUp(1000).promise().then(function () {
            $('#slide2').hide();
            $('#slide1').fadeOut(1000)
        })
    });
}

function getTimeNow() {
    var date = new Date();
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

}