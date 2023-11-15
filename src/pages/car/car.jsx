import { useState, useEffect } from "react";
import Acarreo from "../../components/acarreo";
import Fruta from "../../components/fruta";

const Car = () => {
  const [total, setTotal] = useState(0);
  const [fruits, setFruits] = useState([]);

  const acarreo = (totalvalue) => {
    const { price, operation } = totalvalue;
    setTotal((currentTotal) =>
      operation ? currentTotal + price : currentTotal - price
    );
  };

  useEffect(() => {
    const getfruits = async () => {
      try {
        const url = "https://api.predic8.de/shop/v2/products";
        const peticion = await fetch(url, {
          method: "GET",
        });

        if (!peticion.ok) {
          console.log("Peticion falló");
        } else {
          const res = await peticion.json();
          const response = res.products;

          const fruitsoptained = await Promise.all(
            response.map(async ({ self_link, id }) => {
              const otrapet = await fetch(`https://api.predic8.de${self_link}`);
              if (!otrapet.ok) {
                console.log("Peticion 2 falló");
              } else {
                const otrapetres = await otrapet.json();

                const productname = otrapetres.name;
                const productprice = otrapetres.price;
                return (
                  <Fruta
                    name={productname}
                    price={productprice}
                    img={`https://api.predic8.de${otrapetres.image_link}`}
                    key={id}
                    bus={acarreo}
                  />
                );
              }
            })
          );
          setFruits(fruitsoptained);
        }
      } catch (error) {
        console.error("Error fetching fruits:", error);
      }
    };

    getfruits();
  }, []);

  //   console.log(searchfruits(acarreo));

  return (
    <>
      {fruits}
      <hr />
      <Acarreo total={total} />
    </>
  );
};

export default Car;
