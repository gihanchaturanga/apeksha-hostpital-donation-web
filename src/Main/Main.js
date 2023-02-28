import React from "react";
import ResponsiveAppBar from "../top_nav/TopNav";

function RenderHome(){
    return(
        <div >
            <ResponsiveAppBar/>
            <div>
                <div>
                    <img alt="main.image"></img>
                </div>
                <div></div>
            </div>
        </div>
    );
}
export default ResponsiveAppBar;