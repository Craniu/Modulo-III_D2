// grados = Number(prompt("Introduce la temperatura"))
// if (grados > 30) {
//     console.log('Uf que Calor!')
// }

// btn = document.querySelector("#btn")

// btn.addEventListener("click",()=>{
//     value = document.querySelector('#input').value
//     if (value == 'password-secreto'){
//         par = document.querySelector('#secret-result')
//         par.innerHTML = 'lo lograste'
//         }else{
//            par = document.querySelector('#secret-result')
//            par.innerHTML = 'Nones'
//         }
// })

// if (false) {
//     console.log("Este mensaje no se mostrará");
//     } else if (false) {
//     console.log("Este mensaje tampoco");
//     } else if (true) {
//     console.log("Este mensaje SI se mostrará 👋😁");
//     } else {
//     console.log("A mi no me verás 😑🙄");
//     }
    

//     btn2 = document.querySelector("#btnVer")
//     btn2.addEventListener("click", () => {
//         ancho = Number(document.querySelector("#inAncho").value)
//         if(ancho < 576){
//             alert("xs")
//         }else if(ancho >= 576 && ancho < 768){
//             alert("sm")
//         }else if(ancho >=768 && ancho < 962){
//             alert("md")
//         }else if(ancho >= 962){
//             alert("xl")
//         }
//     })

    
//Problema I
const imgP1 = document.querySelector("#imgP1");
imgP1.addEventListener("click",()=>{
-       imgP1.classList.toggle('bordeP1');
    });
//

//Problema II
const btnP2 = document.querySelector("#btnP2");
const pP2 = document.querySelector("#pP2");
btnP2.addEventListener("click", ()=>{
    console.log("adasdsad")
    cant1 = document.querySelector("#cant1").value;
    cant2 = document.querySelector("#cant2").value;
    cant3 = document.querySelector("#cant3").value;
    total = cant1 + cant2 + cant3;
    pP2.innerHTML = 'Llevas '+ total +' stiker <br>'+
                    'stickers 1: ' + cant1 +
                    'stickers 2: ' + cant2 +
                    'stickers 3: ' + cant3;
    console.log(total);
    console.log(cant1);
    console.log(cant2);
    console.log(cant3);
});


