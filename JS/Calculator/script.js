window.addEventListener("DOMContentLoaded", () => {
  const calculatorScreen = document.querySelector(".calculator__screen");
  const calculatorKeys = document.querySelector(".calculator__keys");

  // update screen width 
  const updateScreenWidth = () => {
    const keysWidth = calculatorKeys.offsetWidth;
    calculatorScreen.style.width = `${keysWidth}px`
  };
  updateScreenWidth();

  // logic 
  calculatorKeys.addEventListener("click", (e) => {
    calculatorScreen.textContent += `${event.target.textContent}`
    console.log(e.target.value)
  })
  
});
