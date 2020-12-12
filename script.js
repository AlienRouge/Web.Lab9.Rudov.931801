var buttons = document.querySelectorAll("button");
var dotAdded = false;
var mathSymbols = ["+", "-", "*", "/"];

for (var i of buttons) {
  i.onclick = function () {
    var screenObj = document.querySelector(".screen");
    var screenValue = screenObj.innerHTML;
    var btnValue = this.innerHTML;
    //С
    if (btnValue == "C") {
      screenObj.innerHTML = "0";
      dotAdded = false;
      //Равно
    } 
    
    else if (btnValue == "⇐") {
      var lastChar = screenValue[screenValue.length - 1];
      if (lastChar == ".") dotAdded = false;
      screenObj.innerHTML = screenValue.slice(0, -1);
    } 

    else if (btnValue == "=") {
      var equation = screenValue;
      var lastChar = equation[equation.length - 1];
      //Проверка: Последний оператор
      if (mathSymbols.indexOf(lastChar) > -1)
        equation = equation.replace(/.$/, "");
      //Расчет
      dotAdded = false;
      if (equation) screenObj.innerHTML = ( Math.floor(eval(equation) * 1000) / 1000 );
    } 

    else if (mathSymbols.indexOf(btnValue) > -1) {
      var lastChar = screenValue[screenValue.length - 1];

      if (screenValue != "" && mathSymbols.indexOf(lastChar) == -1)
        screenObj.innerHTML += btnValue;
      if (screenValue == "0" && btnValue == "-") {
        screenObj.innerHTML = "";
        screenObj.innerHTML += btnValue;
      }
      if (mathSymbols.indexOf(lastChar) > -1)
        screenObj.innerHTML = screenValue.replace(/.$/, btnValue);

      dotAdded = false;
    } 

    else if (btnValue == ".") {
      if (!dotAdded) {
        screenObj.innerHTML += btnValue;
        dotAdded = true;
      }
    }
    //Добавление
    else {
      if (screenValue == "0" && btnValue != ".") screenObj.innerHTML = "";
      screenObj.innerHTML += btnValue;
    }
  };
}
