import { useState } from "react";
import Style from "./Fruta.module.css";

const Fruta = ({ name, price, bus }) => {
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