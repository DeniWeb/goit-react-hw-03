import { useState } from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ name, handleChange }) => {
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className={s.search_input}
        placeholder="Пошук по іменам"
      />
    </>
  );
};

export default SearchBox;
