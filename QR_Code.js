let imgbox = document.querySelector("#imgbox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");

function generateQR (){
    if(qrText.value.length > 0){
        imgbox.classList.remove("notshow-img");
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgbox.classList.add("show-img");
    }else {
        imgbox.classList.add("notshow-img");
        qrText.classList.add("error");
        setTimeout(() => {
        qrText.classList.remove("error");
        }, 1000)
    }
}
