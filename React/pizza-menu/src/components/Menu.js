import Pizza from "./Pizza";
import pizzaData from "../data";

export default function Menu() {
  const pizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas > 0 ?
        (
          <>
            <p>
              Authentic Italian cusine. 6 createive dishes to choose from. All from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {pizzaData.map(pizza => <Pizza key={pizza.name} pizzaObj={pizza} />)}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please come back later :)</p>
        )
      }
    </main>
  );
};