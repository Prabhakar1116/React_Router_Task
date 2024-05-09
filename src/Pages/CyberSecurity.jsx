// importing components
import React from 'react';
import Card from '../Components/Card';

// Getting data(json data) from App.jsx
const CyberSecurity = ({ data }) => {
  // filtering data 
  const cyber = data.filter((item) => item.head === "Cyber security");
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {/* mapping data */}
        {cyber.map((item, index) => {
          return (
            <>
              {/* passing data to Card component */}
              <Card item={item} index={index} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CyberSecurity;