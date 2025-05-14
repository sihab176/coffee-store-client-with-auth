import React from "react";

const ShowDetailsCard = ({ detail }) => {
  const { Name, quantity, Supplier, Taste, Details, Category, Photo } = detail;
  return (
    <div className="flex  justify-around gap-8 items-center p-12 bg-purple-400">
      <div>
        <img src={Photo} alt="" />
      </div>
      <div>
        <p>{Name}</p>
        <p>{Supplier}</p>
        <p>{Taste}</p>
        <p>{Category}</p>
        <p>{quantity}</p>
        <p>{Details}</p>
      </div>
    </div>
  );
};

export default ShowDetailsCard;
