import React, { useState } from "react";
import styles from "./Post.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, sortPost } from "./postSlice";

// dispatch action
export default function Post() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const dataPost = useSelector((state) => state.postReducer);
  const dataCount = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1 className={styles.title}>Title Post</h1>
      {dataPost.map((item, index) => {
        return <p key={index}>{item.postTitle}</p>;
      })}
      <p>{dataCount}</p>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          dispatch(addPost(inputValue));
        }}
      >
        Add post
      </button>
      <button
        onClick={() => {
          dispatch(sortPost());
        }}
      >
        Sắp xếp theo tên
      </button>
    </div>
  );
}

// read/write
