const agora= new Date();
const hora=agora.getHours();
const bora=document.querySelectorAll(".h1")
const boraa=document.querySelectorAll(".boraa")
const boss=document.querySelectorAll(".bb")

if(hora >= 6 && hora < 12){
    document.body.className="manha";
     bora.forEach(e => {
        e.classList.add("ex");
    });
    boraa.forEach(t => {
        t.classList.add("ex");
    });
}else if(hora >= 12 && hora < 18){
    document.body.className="tarde";
     bora.forEach(e => {
        e.classList.add("exdois");
    });
    boraa.forEach(t => {
        t.classList.add("exdois");
    });
} else{
    document.body.className="noite";
    bora.forEach(e => {
        e.classList.add("extres");
    });
    boraa.forEach(t => {
        t.classList.add("extres");
    });
}
boss.forEach(b =>{
    b.addEventListener("click", (evt)=>{
        window.alert("Baixe e compartilhe com alguém muito especial para ti!")
    })
})