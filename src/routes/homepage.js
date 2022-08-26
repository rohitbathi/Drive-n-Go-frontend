import React from "react";

import { Navbar } from "../components/navbar";
import { Wallet } from "../components/wallet";
import { Bookride } from "../components/bookride";

export function Homepage(){
    return(
        <div>
            <Navbar />
            <div className="content">
                <Wallet />
                <Bookride />
            </div>
        </div>
    )
}