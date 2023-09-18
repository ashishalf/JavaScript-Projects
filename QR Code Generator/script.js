const wrapper = document.querySelector(".wrapper"), qrinput = document.querySelector(".form input"), generatedbtn = wrapper.querySelector(".form button"), qrimg = wrapper.querySelector(".qr-code img");
generatedbtn.addEventListener("click",()=>{
    let qrValue = qrinput.value;
    if(!qrValue) return;
    generatedbtn.innerText = "Generating QR Code...";
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrimg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generatedbtn.innerText="Generate QR Code";
    });
});

qrinput.addEventListener("keyup", ()=>{
    if(!qrinput.value){
        wrapper.classList.remove("active");
    }
})
