//Problema III
const btnP3 = document.querySelector("#btnP3");
const pP3 = document.querySelector("#pP3");
btnP3.addEventListener("click",()=>{
    n1 = document.querySelector("#N1").value;
    n2 = document.querySelector("#N2").value;
    n3 = document.querySelector("#N3").value;
    pass = n1+n2+n3;
    if(pass == "911"){
        pP3.innerHTML = "Contraseña 1 Correcta!";
    }else if(pass == "714"){
        pP3.innerHTML = "Contraseña 2 Correcta!";
    }else{
        pP3.innerHTML = "Contraseña incorrecta!";
    }
});
