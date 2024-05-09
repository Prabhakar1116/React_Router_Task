// importing components
import React from 'react';
import Card from '../Components/Card';

// Getting data(json data) from App.jsx
const All = ({ data }) => {
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {/* Mapping data to Card component */}
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default All;