import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListProducts() {
  const [listProduct, setlistProduct] = useState([]);
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

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

  //
  const renderListProduct = (params) => {
    if (listProduct) {
      return listProduct.map((item, index) => {
        return (
          <div
            key={index} // cải thiện peformance
            onClick={() => {
              setName(item.name);
              setdescription(item.description);
              setPrice(item.price);
              setEditId(item.id);
              setIsEdit(true);
            }}
            className="list-wrap"
          >
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

  const editProduct = async () => {
    try {
      await axios.put(
        `https://624ede528c5bf4a10542cebf.mockapi.io/products/${editId}`,
        {
          name: name,
          image: "https://loremflickr.com/320/240",
          description: description,
          price: price,
        }
      );
      setName("");
      setPrice("");
      setdescription("");
      fetchData();
      setIsEdit(false);
      setEditId(null);
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
        <button onClick={isEdit ? editProduct : addProduct}>
          {" "}
          {isEdit ? "Cập nhật" : "Add product"}
        </button>
      </div>
    </div>
  );
}

// api: cách để tương tác với dữ liệu của bên thứ 3
// - 4 buổi này tất cả sẽ cùng làm 1 project, a có thể hướng dẫn 1,2 module -> tự thực hiện các module còn lại, -> buổi cuối bảo vệ đồ án
// - tự làm project riêng của mình, dành 3 buổi để a review -> buổi cuối sẽ bảo vệ.

// => phương án 1
