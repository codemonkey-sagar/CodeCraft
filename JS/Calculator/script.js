window.addEventListener("DOMContentLoaded", () => {
  const screen = document.querySelector(".calculator__screen");
  const keys = document.querySelector(".calculator__keys");
  let expression = "";

  // update screen width 
  const updateScreenWidth = () => {
    const keysWidth = keys.offsetWidth;
    screen.style.width = `${keysWidth}px`
  };
  updateScreenWidth();


  // event listener to handle button press 
  keys.addEventListener("click", (event) => {
    const {target} = event;
    
    if (!target.matches("button")) return;

    const key = target;
    const keyValue = key.textContent;
    const operatorValue = key.value;
    
    if (key.classList.contains("operator")) {
      handleOperator(operatorValue);
    } else if (key.classList.contains("decimal")) {
      handleDecimal();
    } else if (key.classList.contains("all-clear")){
      handleClear();
    } else if (key.classList.contains("equal-key")) {
      evaluteExpression();
    } else {
      appendToExpression(keyValue);
    }

    updateScreen();
  })
  

  function handleOperator(operator){
    appendToExpression(`${operator}`);
  };

  function appendToExpression(value) {
    expression += value;
  }

  function handleDecimal() {
    if(!expression.includes(".")) {
      expression += ".";
    }
  }

  function handleClear() {
    expression = "";
  }

  function updateScreen(){
    screen.textContent = expression;
  }

  function evaluteExpression() {
    try {
      const result = eval(expression);
      expression = String(result)
    } catch(error) {
      expression = "Error"
    }
  }
  
});
