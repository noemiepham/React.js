import react from "react";
import ReactDom from "react-dom/client";
import './index.css'

const pizzaData = [
     {
       name: "Focaccia",
       ingredients: "Bread with italian olive oil and rosemary",
       price: 6,
       photoName: "pizzas/focaccia.jpg",
       soldOut: false,
     },
     {
       name: "Pizza Margherita",
       ingredients: "Tomato and mozarella",
       price: 10,
       photoName: "pizzas/margherita.jpg",
       soldOut: false,
     },
     {
       name: "Pizza Spinaci",
       ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
       price: 12,
       photoName: "pizzas/spinaci.jpg",
       soldOut: false,
     },
     {
       name: "Pizza Funghi",
       ingredients: "Tomato, mozarella, mushrooms, and onion",
       price: 12,
       photoName: "pizzas/funghi.jpg",
       soldOut: false,
     },
     {
       name: "Pizza Salamino",
       ingredients: "Tomato, mozarella, and pepperoni",
       price: 15,
       photoName: "pizzas/salamino.jpg",
       soldOut: true,
     },
     {
       name: "Pizza Prosciutto",
       ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
       price: 18,
       photoName: "pizzas/prosciutto.jpg",
       soldOut: false,
     },
   ];
   

function App () {
     return (
     <div className="container">
          <Header  />
          <Menu />
          <Footer />
     </div>
     );
}
function Header () {
     return <header className="header"><h1>Fast React Pizza Co.</h1></header>
}
function Footer () {
     const hour = new Date().getHours();

     const openHour = 12;
     const closeHour = 22;
     const isOpen = hour >= openHour && hour <closeHour
     return (
          <footer className="footer">{isOpen ? ( <Order closeHour={closeHour} />):<p>See you soon </p>}</footer>
   )
}
function Order (props) {
     return (
          <div className="order">
                    <p>
                         we're open until {props.closeHour}:00. Come visit us or order online
                    </p>
                    <button className="btn">Order</button>
          </div>
     )
}
function Menu () {  
     const pizzas = pizzaData;
     const numPizzas = pizzas.length;
     return (
          <main className="menu">
               <h2>Our Menu</h2>
               {numPizzas > 0 ?  
                    (<ul className="pizzas"> 
                         {pizzas.map((pizza => <Pizza pizzaObjet={pizza} key={pizza.name} />))}
                    </ul>) : <p>We stock soon</p>
               }
          </main>
     )
}

function Pizza ({pizzaObjet}) {
     console.log(pizzaObjet);
/*      if (pizzaObjet.soldOut) return <p>{pizzaObjet.name}</p> */
     return (<li className={`pizza ${pizzaObjet.soldOut ? "sold-out": ""}`}>
               <img src ={pizzaObjet.photoName} alt={pizzaObjet.name}></img>
               <div>
                    <h3>{pizzaObjet.name} </h3>
                    <p> {pizzaObjet.ingredients}</p>
                    <spain> {pizzaObjet.price}</spain>
                    <span>{pizzaObjet.soldOut ? "SOLD OUT" : pizzaObjet.price}</span>
               </div>           
          </li>)
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render (
     <react.StrictMode>
          < App />
     </react.StrictMode>
)
