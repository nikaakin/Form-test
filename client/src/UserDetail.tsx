import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import avatar from "./assets/avatar.png";
import "./css/user-details.scss";

function UserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "jane",
    lastName: "doe",
    age: "42",
    email: "example@test.com",
    picture: avatar,
    description:
      "This is default user. Please sign up or login to see your data in here!",
  });

  useEffect(() => {
    if (!userId) return;

    axios
      .get(`http://localhost:3000/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((data) => setData(data.data.user))
      .catch(() => {
        navigate("/");
        navigate("/login");
      });
  }, [userId]);

  const displayUserDetails = () => {
    return (
      <div className="user-detail">
        <div className="user-detail__image--wrapper">
          <img
            src={`${data?.picture}`}
            alt={data?.description}
            className="user-detail__image--image"
          />
        </div>
        <div className="user-detail__info">
          <div>Name : {data?.firstName}</div>
          <div>Surname : {data?.lastName}</div>
          <div>Age : {data?.age}</div>
          <div>Email : {data?.email}</div>
        </div>
        <div className="user-detail__header">
          <h3>
            More about {data?.firstName} {data?.lastName}:
          </h3>
          <p className="user-detail__description">{data?.description}</p>
        </div>

        <div className="user-detail__link ">
          <Link to={"/me"}>Change personal data</Link>
        </div>
      </div>
    );
  };

  return <div>{displayUserDetails()}</div>;
}

export default UserDetail;
