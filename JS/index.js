function sendMail(){
    alert("Function called")
    var params = {
        name : document.getElementById("f_name").value,
        email : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }

    const serviceID = "service_9u1hfzj";
    const templateID= "template_mpmmi0j";

    emailjs.send(serviceID, templateID ,params)
    .then((res) => {
        document.getElementById("f_name").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert("Message Sent");
    })

    .catch((err) => console.log(err));

}