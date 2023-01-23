import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage({
  message = "Something went wrong. Please try again later!",
}: {
  message?: string;
}) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "30%",
          display: "block",
          width: "100vw",
          textAlign: "center",
          color: "red",
          fontSize: "2rem",
          fontWeight: "600",
        }}
      >
        {message}
        <div style={{ width: "100vw", textAlign: "center", marginTop: "2rem" }}>
          <button onClick={() => navigate("/")} className="btn btn-blue">
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
