import React from "react";
import { Navbar } from "../components/navbar";

import { Profilecard } from "../components/profilecard";

export function Profilepage() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h2 className="page-title">Profile page</h2>
        <Profilecard />
      </div>
    </div>
  );
}
