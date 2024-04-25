let display_output = document.querySelector("#display-output");
let display_output_queue = document.querySelector("#display-output-queue");
let ce = document.querySelector("#operatore1");
let c = document.querySelector("#operatore2");
let x2 = document.querySelector("#operatore3");
let cancella = document.querySelector("#operatore4");
let sette = document.querySelector("#operatore5");
let otto = document.querySelector("#operatore6");
let nove = document.querySelector("#operatore7");
let diviso = document.querySelector("#operatore8");
let quattro = document.querySelector("#operatore9");
let cinque = document.querySelector("#operatore10");
let sei = document.querySelector("#operatore11");
let per = document.querySelector("#operatore12");
let uno = document.querySelector("#operatore13");
let due = document.querySelector("#operatore14");
let tre = document.querySelector("#operatore15");
let meno = document.querySelector("#operatore16");
let zero = document.querySelector("#operatore17");
let virgola = document.querySelector("#operatore18");
let piu = document.querySelector("#operatore19");
let uguale = document.querySelector("#operatore20");

let operatore1,operatore2,operazione;

ce.addEventListener("click", function(){
    display_output.innerHTML = ``;
    operatore1 = null;
    operatore2 = null;
    operazione = null;
    display_output_queue.innerHTML = ``;
});

c.addEventListener("click", function(){
    display_output.innerHTML = ``;
    
    if (operatore1 != null){
        operatore2 = null;
    }else{
        operatore1 = null;
    }
});

cancella.addEventListener("click", function(){
    display_output.innerHTML = display_output.innerHTML.slice(0, display_output.innerHTML.length -1);
});


zero.addEventListener("click", function(){
    display_output.innerHTML += `0`;
});
uno.addEventListener("click", function(){
    display_output.innerHTML += `1`;
});
due.addEventListener("click", function(){
    display_output.innerHTML += `2`;
});
tre.addEventListener("click", function(){
    display_output.innerHTML += `3`;
});
quattro.addEventListener("click", function(){
    display_output.innerHTML += `4`;
});
cinque.addEventListener("click", function(){
    display_output.innerHTML += `5`;
});
sei.addEventListener("click", function(){
    display_output.innerHTML += `6`;
});
sette.addEventListener("click", function(){
    display_output.innerHTML += `7`;
});
otto.addEventListener("click", function(){
    display_output.innerHTML += `8`;
});
nove.addEventListener("click", function(){
    display_output.innerHTML += `9`;
});


piu.addEventListener("click", function(){
    operatore1 = parseFloat(display_output.innerHTML);
    operazione = "piu";
    display_output.innerHTML = ``;
    display_output_queue.innerHTML = operatore1 + " +";
});
meno.addEventListener("click", function(){
    operatore1 = parseFloat(display_output.innerHTML);
    operazione = "meno";
    display_output.innerHTML = ``;
    display_output_queue.innerHTML = operatore1 + " -";

});
diviso.addEventListener("click", function(){
    operatore1 = parseFloat(display_output.innerHTML);
    operazione = "diviso";
    display_output.innerHTML = ``;
    display_output_queue.innerHTML = operatore1 + " ÷";

});
per.addEventListener("click", function(){
    operatore1 = parseFloat(display_output.innerHTML);
    operazione = "per";
    display_output.innerHTML = ``;
    display_output_queue.innerHTML = operatore1 + " x";


});
x2.addEventListener("click", function(){
    operatore1 = parseFloat(display_output.innerHTML);
    operazione = "quadrato";
    display_output.innerHTML = ``;
    display_output_queue.innerHTML = operatore1 + " ª";

});
virgola.addEventListener("click", function(){
    display_output.innerHTML += `.`;
});




uguale.addEventListener("click", function(){
    let risultato;
    operatore2 = parseFloat(display_output.innerHTML);


    switch (operazione){
        case "piu": {
            risultato = operatore1 + operatore2;
            break;
        }
        case "meno": {
            risultato = operatore1 - operatore2;
            break;
        }
        case "per": {
            risultato = operatore1 * operatore2;
            break;
        }
        case "diviso": {
            risultato = operatore1 / operatore2;
            break;
        }
        case "quadrato": {
            risultato = operatore1 ** operatore2;
            break;
        }
    }

    operatore1=null;
    operatore2=null;
    display_output_queue.innerHTML = ``;

    let risultatoVirgola = risultato.toString().split(".")

    if(risultatoVirgola[1] > "00"){
        display_output.innerHTML = risultato.toFixed(2);
    } else{
        display_output.innerHTML = risultato.toFixed(0);
    }

});


