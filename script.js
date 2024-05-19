let expSelector = document.querySelector(".exp");
let resultSelector = document.querySelector(".result");
let errorText = document.getElementById("errorText");


let exp = "";
function makeExp(char) {
  let temp = exp + char;
  if (
    !temp.includes("++") &&
    !temp.includes("--") &&
    !temp.includes("+-") &&
    !temp.includes("-+") &&
    !temp.includes("+*") &&
    !temp.includes("+%") &&
    !temp.includes("+/") &&
    !temp.includes("-*") &&
    !temp.includes("-%") &&
    !temp.includes("-/") &&
    !temp.includes("*+") &&
    !temp.includes("*-") &&
    !temp.includes("**") &&
    !temp.includes("*%") &&
    !temp.includes("*/") &&
    !temp.includes("%+") &&
    !temp.includes("%-") &&
    !temp.includes("%*") &&
    !temp.includes("%%") &&
    !temp.includes("%/") &&
    !temp.includes("/+") &&
    !temp.includes("/-") &&
    !temp.includes("/*") &&
    !temp.includes("/%") &&
    !temp.includes("//")
  ) {
    exp += char;
    console.log(exp);
    expSelector.innerHTML = exp;
  }
  else {
    errorText.innerHTML = "Not a valid Str";  
}
}
function makeResult() {
  if (exp) {
    const result = eval(exp);
    console.log(result);
    resultSelector.innerHTML = result;
  } else {
    errorText.innerHTML = "Not a valid Expression";
  }
}
function clearResult() {
  expSelector.innerHTML = "_";
  resultSelector.innerHTML = "0";
  exp = "";
  errorText.innerHTML = "";
}
function onBackspace(){
    const newExp = exp.slice(0,-1);
    console.log(newExp);
    expSelector.innerHTML = newExp;
    exp = newExp;
}
