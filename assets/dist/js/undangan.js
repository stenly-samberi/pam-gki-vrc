$(document).ready(function(){
    $(".hubungi").click(function(){
        var phoneNumber = "6281249592962";
        var message = "Halo!."; 
        var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
        window.location.href = whatsappURL;
    });
});