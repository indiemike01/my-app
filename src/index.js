import React from "react";
import ReactDom from "react-dom";

//CSS

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71M4abh-afL._AC_UL906_SR906,600_.jpg"
        alt=""
      />
      <h1>Robert Kennedy</h1>
      <h4>The real anthony Fauci</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
