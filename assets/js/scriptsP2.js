//Problema II
const btnP2 = document.querySelector("#btnP2");
const pP2 = document.querySelector("#pP2");
btnP2.addEventListener("click", ()=>{
    console.log("adasdsad")
    cant1 = Number(document.querySelector("#cant1").value);
    cant2 = Number(document.querySelector("#cant2").value);
    cant3 = Number(document.querySelector("#cant3").value);
    total = cant1 + cant2 + cant3;
    if(total <= 10 ){
        pP2.innerHTML = 'Llevas un total de '+ total +' stikers <br>'+
        'stickers JS: ' + cant1 +
        '.  stickers HTML: ' + cant2 +
        '.  stickers CSS: ' + cant3;
    }else{
        pP2.innerHTML = "LLevas demasiados stickers."
    }

});


