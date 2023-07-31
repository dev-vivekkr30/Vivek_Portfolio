function sendMail(){
    var params = {
        name : document.getElementById("f_name").value,
        email : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_9u1hfzj","template_mpmmi0j",params).then(function res(){
        alert("Success!" + res.status);
    })
}