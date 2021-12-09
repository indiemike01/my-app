import React from "react";
import ReactDom from "react-dom";

//CSS

import "./index.css";

//Set up vars

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71M4abh-afL._AC_UL906_SR906,600_.jpg",
  title: "The real anthony Fauci",
  author: "Robert Kennedy",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71xUvuJiqgL._AC_UL906_SR906,600_.jpg",
  title: "Lilly from the vally",
  author: "Carmen Gucci",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, cum.
          Autem suscipit recusandae tenetur perspiciatis. Vero quisquam
          accusamus corrupti quae.
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{author}</h1>
      <h4>{title}</h4>
      {children}
      <p></p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
