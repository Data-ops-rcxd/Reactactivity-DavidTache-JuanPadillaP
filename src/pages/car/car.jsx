import { useState, useEffect } from 'react';
import Acarreo from '../../components/acarreo';
import Fruta from '../../components/fruta';

const Car = () => {
    const [total, setTotal] = useState(0);

    const acarreo = (totalvalue) => {
        const { price, operation } = totalvalue;
        setTotal(currentTotal => operation ? currentTotal + price : currentTotal - price);
    };

    useEffect(() => {
        console.log('Total actualizado: ', total);
    }, [total]);

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