import React, { useState } from "react";
import { useLoaderData } from "react-router";
import User from "./User";

const Users = () => {
  const intialUser = useLoaderData();
  const [allUser, setAllUser] = useState(intialUser);
  return (
    <div>
      <div>
        {allUser.map((user, index) => (
          <User
            key={user._id}
            user={user}
            index={index}
            intialUser={intialUser}
            setAllUser={setAllUser}
          ></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
