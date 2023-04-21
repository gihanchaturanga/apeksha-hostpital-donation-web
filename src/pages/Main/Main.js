import React from "react";
import ResponsiveAppBar from "../../common/top_nav/TopNav";
import './Main.css'
import bgImg from '../../resources/images/main.jpg'

function RenderHome(){
    return(
        <div id="main-container">
            <ResponsiveAppBar/>
            <div className="body-container" style={{border: '5px solid black', width:'500px', height:'500px'}}>

            </div>
        </div>
    );
}
export default ResponsiveAppBar;
