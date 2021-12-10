import React from "react";

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  //onClick, onMouseHover
  const clickHandler = () => {
    alert("hello world");
  };

  return (
    <article className="book">
      <img
        src={img}
        alt=""
        onMouseOver={() => {
          console.log("something");
        }}
      />
      <h1>{author}</h1>
      <h4>{title}</h4>
      <button type="button" onClick={clickHandler}>
        reference
      </button>
    </article>
  );
};

export default Book;
