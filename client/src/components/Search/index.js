import React from 'react';

const Search = () => {
  return (
    <div className="my-4 p-4 border border-black">
      <h1>Book Search</h1>
      <input className="my-4 p-2 w-full border border-black" type="text" placeholder="Search for a book..."/>
      <button className="px-4 py-1 border border-black items-right shadow">Search</button>
    </div>
  );
}

export default Search;