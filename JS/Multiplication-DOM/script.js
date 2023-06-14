// header 
const h1 = document.createElement("h1");
h1.textContent = "Multiplication Table";

const body = document.querySelector("body");
body.appendChild(h1);

h1.style.textAlign = "center";


// Show multiplication table on DOM 
const section = document.createElement("section");  

// logic
for (let i = 1; i <= 10; i++) {
  const div = document.createElement("div");

  for (let j = 1; j <= 10; j++) {
    const p = document.createElement("p");
    p.textContent = `${i} x ${j} = ${i * j}`;
    div.appendChild(p);
  }
  section.appendChild(div);
  console.log(div)
  div.style.cssText = `
    border-radius: 10px;
    background-color: rgb(${Math.random() * 500}, ${Math.random() * 500}, ${Math.random() * 50});
  `
} 

body.appendChild(section)


// Styling 
body.style.margin = "0 180px";
section.style.cssText = `
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(5, 1fr);
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  gap: 10px;
  background-color: white;
`