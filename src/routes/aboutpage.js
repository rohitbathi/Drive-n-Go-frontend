import React from "react";
import { Navbar } from "../components/navbar";


export function Aboutpage(){
    return(
        <div>
            <Navbar />
            <div className="content">
               <h2 className="page-title">About</h2>
               <p className="text-content">
                    Drive'N'Go is a service provided for 
                    students, teachers and staff alike to 
                    <b><i> ease the pain of travelling</i></b> across a 
                    big campus like VIT. Our aim is to reduce the
                     <b><i>hassle of travelling</i></b> for people living or working
                    in big university campuses like VIT, MIT, etc.<br/><br/>
                    <h3>Rules</h3>
                    <ul>
                        <li>Go to your nearest DnG outpost</li>
                        <li>Check the DnG code on the cycle</li>
                        <li>Open the app, login and enter the cod in the Ridee Now section</li>
                        <li>Enter the number of hours you will be using the cycle</li>
                        <li>Now you can use the cycle and drop it in the nearest DnG outpost at your comfort after use</li>
                    </ul>
               </p>
            </div>
        </div>
    )
}