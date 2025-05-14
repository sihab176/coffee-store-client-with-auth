import React from "react";
import { useLoaderData } from "react-router";
import ShowDetailsCard from "./ShowDetailsCard";

const CoffeeDetails = () => {
  const details = useLoaderData();

  return (
    <div>
      <ShowDetailsCard detail={details} />
    </div>
  );
};

export default CoffeeDetails;
