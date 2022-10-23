import React from "react";
import Button from "react-bootstrap/Button";

const Buton = ( {personList} ) => {
  
  const handleClick = () => {
    return  personList();
  };


  return (
    <Button className="btnDiv bg-danger fw-bold btn-lg" onClick={handleClick} variant="info">
      Change User
    </Button>
  );
};

export default Buton;
