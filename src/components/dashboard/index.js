import React, { useState, useEffect } from "react";
import "../../styles/dashboard/style.css";

function DashboardComponent() {
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUserDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="dashboard-parent">
      {userDetails ? (
        <>
          <div>Id: {userDetails?.id}</div>
          <div>Name: {userDetails?.name}</div>
          <div>Email:{userDetails?.email} </div>
          <div>Role: {userDetails?.role}</div>
        </>
      ) : null}
    </div>
  );
}

export default DashboardComponent;
