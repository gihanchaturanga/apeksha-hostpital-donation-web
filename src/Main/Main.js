import React from "react";
import ResponsiveAppBar from "../top_nav/TopNav";

function RenderHome(){
    return(
        <div>
            <ResponsiveAppBar/>
            <main>
                <div>
                    <img alt="main.image"></img>
                </div>
                <div></div>
            </main>
        </div>
    );
}