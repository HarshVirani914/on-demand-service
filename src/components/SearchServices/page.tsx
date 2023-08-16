import React from 'react';



const SearchServices = () => {
  return (
    <>
        <div className="container -my-96 -mx-44">
          <div className="container opacity-80 absolute">
            <input
              type="text"
              value="Search For Services..."
              id='search  '
              className="pl-4 py-4 rounded-lg pr-52 mx-10"
            />
          </div>
        </div>
    </>
  );
};

export default SearchServices;


