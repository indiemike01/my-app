import React from "react";
import ReactDom from "react-dom";

//CSS

import "./index.css";

//Set up vars

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71M4abh-afL._AC_UL906_SR906,600_.jpg",
    title: "The real anthony Fauci",
    author: "Robert Kennedy",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71xUvuJiqgL._AC_UL906_SR906,600_.jpg",
    title: "Lilly from the vally",
    author: "Carmen Gucci",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
    </section>
  );
}

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

ReactDom.render(<BookList />, document.getElementById("root"));
