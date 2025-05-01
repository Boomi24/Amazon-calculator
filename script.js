let inputArea=document.getElementById("input-area");
let calculateBtn=document.getElementById("calculate-btn");
let finalResults=document.getElementById("results");

let results;

function calculates(){
    
    if(inputArea.value < 1){
        results = "Please enter a valid amount";
        finalResults.innerHTML = `${results}`;
    }
    if(inputArea.value < 40 && inputArea.value >=1){
        results = Number(inputArea.value) + 10;
        finalResults.innerHTML=`$${results}`;
    }
    else if(inputArea.value >= 40){
        results = Number(inputArea.value);
        finalResults.innerHTML=`$${results}`;
    }
}