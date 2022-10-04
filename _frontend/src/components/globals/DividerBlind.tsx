import React from "react";
import PropTypes from "prop-types";
import dividerImg from "img/dividerbg.png"


const DividerBlind = ({classList} : any) =>{
    const divider = dividerImg.src; 
    return(
        <section 
        className={classList}
        style={{backgroundImage : `url(${divider})`}}></section>
    )
}

export default DividerBlind;

DividerBlind.propTypes = {
    classList : PropTypes.string
}