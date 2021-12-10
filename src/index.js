import React from "react";
import ReactDom from "react-dom";

//CSS

import "./index.css";

import { books } from "./books.js";
import Book from "./Book.js";

//Set up vars

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
