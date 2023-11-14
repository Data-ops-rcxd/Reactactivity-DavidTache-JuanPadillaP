import { useState, useEffect } from 'react';
import Acarreo from '../../components/acarreo';
import Fruta from '../../components/fruta';

async function searchfruits() {

    const url = "https://api.predic8.de/shop/v2/products"
    const peticion = await fetch(url, {
        method: 'GET',
    })

    if (!peticion.ok) {
        console.log('Peticion falló');
    } else {
        const res = await peticion.json()
        const response = res.products

        response.forEach(async ({ self_link }) => {
            const otrapet = await fetch(`https://api.predic8.de${self_link}`)
            if (!otrapet.ok) {
                console.log('Peticion 2 falló');
            } else {
                const otrapetres = await otrapet.json()
                const productname = otrapetres.name
                const productprice = otrapetres.price
                console.log(otrapetres);
            }
        });
    } 
}

const Car = () => {
    const [total, setTotal] = useState(0);

    const acarreo = (totalvalue) => {
        const { price, operation } = totalvalue;
        setTotal(currentTotal => operation ? currentTotal + price : currentTotal - price);
    };

    useEffect(() => {
        console.log('Total actualizado: ', total);
    }, [total]);

    console.log(searchfruits())

    return (
        <>
            <Fruta name="Manzana" price={1000} bus={acarreo} />
            <Fruta name="Pera" price={600} bus={acarreo} />
            <Fruta name="Mango" price={800} bus={acarreo} />
            <Fruta name="Guanabana" price={1200} bus={acarreo} />
            <Fruta name="Piña" price={3000} bus={acarreo} />
            <hr />
            <Acarreo total={total} />
        </>
    );
};

export default Car;