let imgBox = document.getElementById("imgBox");
let qrImge = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function GenerateQR(){
    qrImge.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + qrText.value ;
}
GenerateQR;