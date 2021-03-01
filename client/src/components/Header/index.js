import React from 'react';

const Header = () => {
  return (
    <div className="flex py-4 border border-black items-baseline">
      <h1 className="p-4 text-2xl cursor-pointer" onClick={()=>{window.location = '/'}}>Google Books</h1>
      <a className="p-4" href="/search">Search</a>
      <a className="p-4" href="/saved">Saved</a>
    </div>
  );
};

export default Header;