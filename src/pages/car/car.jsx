import { useState, useCallback } from 'react';
import Acarreo from '../../components/acarreo';
import Fruta from '../../components/fruta';

const Car = () => {
    const [total, setTotal] = useState(0);

    const acarreo = useCallback((totalvalue) => {
        const { price, operation } = totalvalue;
        setTotal(currentTotal => {
            return operation ? currentTotal + price : currentTotal - price;
        });
        console.log('mostrando desde el padre: ', totalvalue);
    }, []);

    return (
        <>
            <Fruta name={"Manzana"} price={1000} bus={acarreo} />
            <Fruta name={"Pera"} price={600} bus={acarreo} />
            <Fruta name={"Mango"} price={800} bus={acarreo} />
            <Fruta name={"Guanabana"} price={1200} bus={acarreo} />
            <Fruta name={"Piña"} price={3000} bus={acarreo} />
            <hr />
            <Acarreo total={total} />
        </>
    );
};

export default Car;