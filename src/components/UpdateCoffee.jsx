import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const details = useLoaderData();

  const { Name, Photo, Details, Category, Taste, Supplier, quantity, _id } =
    details;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

    //updated
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(data);
        }
      });
  };
  return (
    <div className="p-12 bg-[#F4F3F0]">
      <div className="text-center space-y-4 p-10">
        <h1 className="text-6xl ">Update Coffee</h1>
      </div>

      <form onSubmit={handleUpdate}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Name.."
              defaultValue={Name}
              name="Name"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">quantity</label>
            <input
              type="text"
              className="input w-full"
              placeholder="quantity"
              defaultValue={quantity}
              name="quantity"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              placeholder="supplier "
              defaultValue={Supplier}
              name="Supplier"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              className="input w-full"
              placeholder="taste"
              defaultValue={Taste}
              name="Taste"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              className="input w-full"
              placeholder="category"
              defaultValue={Category}
              name="Category"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              placeholder="details"
              defaultValue={Details}
              name="Details"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 md:col-span-2">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full "
              placeholder="Photo url.."
              defaultValue={Photo}
              name="Photo"
            />
          </fieldset>
          <button className="w-full btn bg-[#D2B48C] md:col-span-2">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
