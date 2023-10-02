export default function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>${pizzaObj.price}</span>
        )
        }
      </div>
    </li >
  );
};