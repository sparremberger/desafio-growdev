import React from "react";

const Reusable = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <hr></hr>
            <p>{props.content}</p>
        </div>
    );
};

export default Reusable;
