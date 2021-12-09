import React from "react";
import ReactDom from "react-dom";

//CSS

import "./index.css";

//Set up vars

const books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71M4abh-afL._AC_UL906_SR906,600_.jpg",
    title: "The real anthony Fauci",
    author: "Robert Kennedy",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71xUvuJiqgL._AC_UL906_SR906,600_.jpg",
    title: "Lilly from the vally",
    author: "Carmen Gucci",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book img={book.img} title={book.title} author={book.author} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{author}</h1>
      <h4>{title}</h4>
      <p></p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
