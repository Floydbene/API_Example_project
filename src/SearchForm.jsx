import React from 'react';
import { useState } from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const [value, setValue] = useState('Dog');
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(value);
  };
  return (
    <section>
      <h1 className='title'>Images from Unsplash API</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          className='form-input search-input'
          placeholder='cat'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
