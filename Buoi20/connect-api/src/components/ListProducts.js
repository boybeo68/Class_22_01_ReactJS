import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListProducts() {
  const [listProduct, setlistProduct] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let result = await axios.get(
      "https://624ede528c5bf4a10542cebf.mockapi.io/products"
    );
    console.log(result);
    setlistProduct(result.data);
  };

  const renderListProduct = (params) => {
    if (listProduct) {
      return listProduct.map((item, index) => {
        return <p key={index}>{item.name}</p>;
      });
    }
  };

  return <div>{renderListProduct()}</div>;
}
