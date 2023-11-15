import { useState } from "react";
import Style from "./Fruta.module.css";

// eslint-disable-next-line react/prop-types
const Fruta = ({ name, price, img, bus }) => {
    const [cantidad, setCantidad] = useState(0);

    const agregar = () => {
        setCantidad(cantidadActual => cantidadActual + 1);
        bus({
            price,
            operation: true
        });
    };

    const quitar = () => {
        setCantidad(cantidadActual => cantidadActual - 1);
        bus({
            price,
            operation: false
        });
    };

    return (
        <div className={Style.fruta}>
            <img src={img} alt={img} height={"230px"} width={"300px"}/>
            <h2>Nombre: {name}</h2>
            <h3>Precio: ${price}</h3>

            <button onClick={agregar}>+</button>
            <button onClick={quitar} disabled={cantidad === 0}>-</button>

            <p>Cantidad: {cantidad}</p>
            <p>Subtotal: {price * cantidad}</p>

            <hr />
        </div>
    );
};

export default Fruta;