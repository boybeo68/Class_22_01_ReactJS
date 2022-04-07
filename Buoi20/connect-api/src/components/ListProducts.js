import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListProducts() {
  const [listProduct, setlistProduct] = useState([]);
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let result = await axios.get(
        "https://624ede528c5bf4a10542cebf.mockapi.io/products"
      );
      setlistProduct(result.data);
    } catch (error) {
      alert("loi api");
    }
  };

  const renderListProduct = (params) => {
    if (listProduct) {
      return listProduct.map((item, index) => {
        return (
          <div className="list-wrap">
            <p>{item.name}</p>
            <div className="detail">
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          </div>
        );
      });
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDescription = (e) => {
    setdescription(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const addProduct = async () => {
    try {
      console.log({ name, description, price });
      await axios.post("https://624ede528c5bf4a10542cebf.mockapi.io/products", {
        name: name,
        image: "https://loremflickr.com/320/240",
        description: description,
        price: price,
      });
      setName("");
      setPrice("");
      setdescription("");
      fetchData();
    } catch (error) {
      alert("loi api");
    }
  };

  return (
    <div>
      <div>{renderListProduct()}</div>
      <div className="formData">
        <label htmlFor="">name</label>
        <input value={name} type="text" onChange={onChangeName} />
        <label htmlFor="">price</label>
        <input value={price} type="number" onChange={onChangePrice} />
        <label htmlFor="">description</label>
        <input value={description} type="text" onChange={onChangeDescription} />
        <button onClick={addProduct}>add product</button>
      </div>
    </div>
  );
}