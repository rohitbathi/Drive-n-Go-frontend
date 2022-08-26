import React from "react";

import { Menubar } from "./menubar";
import { Titlebar } from "./titlebar";

export function Navbar(){
    return( 
        <div className="navbar">
            <Titlebar />
            <Menubar />
        </div>
    )
}