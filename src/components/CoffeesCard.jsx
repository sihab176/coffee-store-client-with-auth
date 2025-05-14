import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeesCard = ({ coffee, intialCoffees, setCoffees }) => {
  const { Name, Photo, Details, Category, Taste, Supplier, quantity, _id } =
    coffee || {};

  const handleDelete = (id) => {
    console.log(id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        console.log(result.isConfirmed);
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/coffees/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });

                const remaining = intialCoffees.filter(
                  (remainingCoffee) => remainingCoffee._id !== _id
                );
                setCoffees(remaining);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="flex justify-between items-center p-4 bg-pink-300 ">
      <div>
        <img src={Photo} alt="" />
      </div>
      {/* text */}
      <div>
        <p>Name: {Name}</p>
        <p>category: {Category}</p>
        <p>price :{quantity}</p>
      </div>
      {/* buttons */}
      <div className="card-actions justify-end">
        <div className="join join-vertical space-y-4">
          <Link to={`/coffeeDetails/${_id}`}>
            <button className="btn join-item">view</button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn join-item">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn join-item">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeesCard;
