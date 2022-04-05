import React from "react";

export default function Header(props) {
  return (
    <div
      style={{ backgroundColor: props.correctKey ? "green" : "gray" }}
      className="jumbotron text-center"
    >
      <h1>Getting random number</h1>
      <p>
        Tôi đã chọn một số random trong khoảng 1 đến 100, bạn có thể đoán được?
      </p>
      <p>{props.dataHeader}</p>
      <button
        onClick={() => {
          props.changeTextChild("data được truyền từ component con");
        }}
      >
        Change text
      </button>
    </div>
  );
}

// làm lại random game -> mục tiêu tự hoàn thành được mà ko cần xem code

// Thực hành:
// Tạo 1 component tên Wrap
// Tạo 1 component WrapChild: Năm trong Wrap
// Truyền count (number) từ Wrap -> WrapChild
// WrapChild: Thay đổi đối biến count: click để tăng count lên 2 đơn vị
