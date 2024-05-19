let expSelector = document.querySelector('.exp');
let resultSelector = document.querySelector('.result');


let exp = "";
function makeExp(char){
  exp = exp + char;
  console.log(exp);
  expSelector.innerHTML = exp;

}
function makeResult(){
   const result = eval(exp);
   console.log(result);
   resultSelector.innerHTML = result;
}
function clearResult(){
  expSelector.innerHTML = "_";
  resultSelector.innerHTML = "0";
  exp="";
}