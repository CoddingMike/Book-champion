import { useState } from "react";

import "./BookItem.css";

import ReadDate from "../ReadDate/ReadDate";
import BookCard from "../../ui/BookCard/BookCard";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  /* ----------------------> Object destructuring */

  const [newTitle, setNewTitle] = useState(title);

  const clickHandler = () => {
    setNewTitle("Actualizado!");
  };

  return (
    <BookCard>
      <h2>{newTitle}</h2>
      <h3>{author}</h3>
      <ReadDate dateRead={dateRead} />
      <p>{pageCount}</p>
      <button onClick={clickHandler}>Cambiar titulo</button>
    </BookCard>
  );
};

export default BookItem;
