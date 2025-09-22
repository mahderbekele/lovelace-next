"use client";
import Values from "./components/values";
import Button from "../shared-components/Button";
const About=()=>{
    return(
        <>
        <h1>About Us</h1>
        <Button buttonText="Click me"variant="primary" onClickHandler={()=> alert("Click was successful")}/>
        <Values />
        </>
    );
};

export default About;