import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Author />
      <Title />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71M4abh-afL._AC_UL906_SR906,600_.jpg"
    alt=""
  />
);

const Author = () => <h1>Robert Kennedy</h1>;
const Title = () => <h1>The real anthony Fauci</h1>;

ReactDom.render(<BookList />, document.getElementById("root"));
