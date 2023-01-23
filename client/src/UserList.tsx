import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "./assets/avatar.png";
import "./css/user-list.scss";
import "./css/link.scss";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then(({ data }) => setUsers(data.users));
  }, []);

  const displayUsers = () => {
    return users.map(
      (user: {
        picture: string;
        firstName: string;
        lastName: string;
        age: number;
        id: string;
      }) => {
        return (
          <div className="user-list__item" key={user.id}>
            <img
              src={user.picture ? user.picture : avatar}
              alt={`${user.firstName} ${user.lastName}`}
              className="user-list__item--image"
            />
            <div className="user-list__item--info">
              <h4 className="user-list__item--header">
                {user.firstName} {user.lastName}
              </h4>
              <div className="user-list__item--link">
                <Link to={`/users/${user.id}`} className="link">
                  See more &rarr;
                </Link>
              </div>
            </div>
          </div>
        );
      }
    );
  };

  return <div className="user-list">{displayUsers()}</div>;
}

export default UserList;
