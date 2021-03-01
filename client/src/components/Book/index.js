import React from 'react';

const Book = (props) => {
  return (
    <div className="my-4 p-4 border border-black">
      <div className="flex justify-between">
        {/* Book Info */}
        <div>
          <h1 className="text-2xl">{props.title}</h1>
          <h3 className="text-lg">{props.subtitle}</h3>
          <h4 className="text-sm">Written By: {props.author}</h4>
        </div>
        {/* Buttons */}
        <div>
          <button className="px-2 py-1 m-2 border border-black">View</button>
          <button className="px-2 py-1 m-2 border border-black">Save</button>
        </div>
      </div>

      <div className="flex mt-4">
        <img src={props.image} alt={props.title} className="border border-black w-1/5 h-full"/>
        <h3 className="ml-4 w-full">{props.description}</h3>
      </div>
    </div>
  );
};

export default Book;
