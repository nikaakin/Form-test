import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/alert.scss";

function Alert({
  message,
  status,
  id,
}: {
  message: string;
  status: string;
  id: string;
}) {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setDisplay("none");
      if (status === "success") navigate(`/users/${id}`);
    }, 2000);
  }, []);

  const displayAlert = () => {
    if (status === "success") {
      return <div className="alert__success">{message}</div>;
    }
    if (status === "error") {
      return <div className="alert__error">{message}</div>;
    }
  };

  return (
    <div className="alert" style={{ display: display }}>
      {displayAlert()}
    </div>
  );
}

export default Alert;
