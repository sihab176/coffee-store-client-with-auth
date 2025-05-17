import React from "react";
import Swal from "sweetalert2";

const User = ({ user, index, setAllUser, intialUser }) => {
  const { _id, name, photo, phone, address } = user || {};

  const handleDelete = (id) => {
    console.log("deleted");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://v1-coffee-store-server-psi.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user deleted :", data);
            const remaining = intialUser.filter(
              (singleUser) => singleUser._id !== id
            );
            setAllUser(remaining);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md mb-2">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Most played songs this week
        </li>

        <li className="list-row">
          <div className="text-4xl font-thin opacity-30 tabular-nums">
            {index + 1}
          </div>
          <div>
            <img className="size-10 rounded-box" src={photo} />
          </div>
          <div className="list-col-grow">
            <div>{name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {address}
            </div>
          </div>
          <div>
            <button className="btn">view</button>
            <button className="btn">edit</button>
            <button onClick={() => handleDelete(_id)} className="btn">
              del
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default User;
