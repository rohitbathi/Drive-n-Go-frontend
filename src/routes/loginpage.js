import React from "react";

import { Titlebar } from "../components/titlebar";
import { Logincard } from "../components/logincard";
import { Signupcard } from "../components/signupcard";

export function Loginpage(){
    return(
        <div>
            <Titlebar />
            <Logincard />
            <Signupcard />
        </div>        
    )
}