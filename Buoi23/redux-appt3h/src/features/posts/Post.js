import React, { useState, useEffect } from "react";
import styles from "./Post.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, addTodo, getListTodo, sortPost } from "./postSlice";

// dispatch action
export default function Post() {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const dataPost = useSelector((state) => state?.postReducer?.data);
  const dataCount = useSelector((state) => state?.counter?.value);
  useEffect(() => {
    dispatch(getListTodo());
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Title Post</h1>
      <input
        value={title}
        placeholder={"title"}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
      />
      <input
        value={content}
        placeholder={"content"}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={async () => {
          await dispatch(addTodo({ content, title })).unwrap();
          dispatch(getListTodo());
        }}
      >
        Add Todo
      </button>

      {dataPost.map((item, index) => {
        return <p key={index}>{item.content}</p>;
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

// async function.

// Trước đây : call api  -> lưu dữ liệu trong state
// now: dispatch action (call api  -> lưu dữ liệu trong redux )
