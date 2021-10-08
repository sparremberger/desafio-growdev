import React from "react";

const Comment = (props) => {
    return (
        <div>
            <h3>{props.comentario.nome}</h3>
            <h5>{props.comentario.createdAt}</h5>
            <p>{props.comentario.comentario}</p>
        </div>
    );
};

export default Comment;
