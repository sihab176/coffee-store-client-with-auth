import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //! from data method \\
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData);
    //Post  \\
    fetch("https://v1-coffee-store-server-psi.vercel.app/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="p-12 bg-[#F4F3F0]">
      <div className="text-center space-y-4 p-10">
        <h1 className="text-6xl ">Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a <br /> page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal <br />{" "}
          distribution of letters, as opposed to using Content here.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Name.."
              name="Name"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">quantity</label>
            <input
              type="text"
              className="input w-full"
              placeholder="quantity"
              name="quantity"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              placeholder="supplier "
              name="Supplier"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              className="input w-full"
              placeholder="taste"
              name="Taste"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              className="input w-full"
              placeholder="category"
              name="Category"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              placeholder="details"
              name="Details"
            />
          </fieldset>
          <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 md:col-span-2">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full "
              placeholder="Photo url.."
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

export default AddCoffee;
