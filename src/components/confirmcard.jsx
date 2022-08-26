import React from "react";
import { Navbar } from "./navbar";

export function Confirmcard(){
    return(
        <div>
            <Navbar />
            <div className="content">
                <div className="content-box" style={{
                    "box-shadow": "2px 4px #7FFF00",
                    "border": "0.1rem solid #222831",
                    "color" : "#006400"
                    }}>
                    <h3>Your payment has been confirmed</h3>
                </div>
            </div>
        </div>
    )
}