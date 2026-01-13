contador = 0;

 let increase= document.querySelector("#increase");
 let decrease= document.querySelector("#decrease");
 let reset= document.querySelector("#reset");
 let counter= document.querySelector("#counter");
 const error= document.querySelector("#error");



 increase.addEventListener("click", function() {

    contador++;
    if(contador > 10){
        alert("El contador ha superado el valor 10");
    }
    counter.innerHTML = contador;
 });

 decrease.addEventListener("click", function () {
    if (contador === 0) {
        error.innerHTML = "No puedes bajar de 0";
        error.classList.add("show");
        
        setTimeout(() => {
            error.innerHTML = "";
        }, 1000);

    } else {
        contador--;
        counter.innerHTML = contador;
        error.innerHTML = "";
    }
});

 reset.addEventListener("click",function(){

    contador=0;
    counter.innerHTML=contador;
 });