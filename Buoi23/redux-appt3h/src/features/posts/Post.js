import React from "react";
import styles from "./Post.module.css";
import { useSelector } from "react-redux";

export default function Post() {
  const dataPost = useSelector((state) => state.postReducer);
  const dataCount = useSelector((state) => state.counter.value);

  console.log({ dataPost, dataCount });

  return (
    <div>
      <h1 className={styles.title}>Title Post</h1>
      {dataPost.map((item, index) => {
        return <p key={index}>{item.postTitle}</p>;
      })}
      <p>{dataCount}</p>
    </div>
  );
}
