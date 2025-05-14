import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeesCard from "./CoffeesCard";

const Home = () => {
  const intialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(intialCoffees);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeesCard
            key={coffee._id}
            coffee={coffee}
            intialCoffees={intialCoffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
