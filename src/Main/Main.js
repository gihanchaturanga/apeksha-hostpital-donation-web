import React from "react";
import ResponsiveAppBar from "../top_nav/TopNav";
import pic from '../resources/images/main.jpg';

function RenderHome() {
  return (
    <div>
      <ResponsiveAppBar />
      <img src={pic} alt="React Image" style={{width:"50%", height:"100%", border:"1px solid black"}}/>
      
    </div>
  );
}
export default ResponsiveAppBar;
