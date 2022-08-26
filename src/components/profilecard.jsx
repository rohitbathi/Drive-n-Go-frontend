import React from "react";

export function Profilecard(props) {
  return (
    <div>
      <table>
        <tr>
          <td className="label">Username</td>
          <td>{localStorage.getItem("Username")}</td>
        </tr>
        <tr>
          <td className="label">Email</td>
          <td>{localStorage.getItem("Email")}</td>
        </tr>
        <tr>
          <td className="label">Contact Number</td>
          <td>{localStorage.getItem("Contact")}</td>
        </tr>
      </table>
    </div>
  );
}
