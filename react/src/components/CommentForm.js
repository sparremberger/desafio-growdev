import React from "react";
import axios from "axios";

const CommentForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCommentData = {
            nome: e.target.name.value,
            comentario: e.target.comment.value,
        };
        axios.post("/api/comments", newCommentData).then((response) => {
            alert("Comentário enviado!");
            window.location.reload();
        });
    };
    return (
        <div>
            <hr />
            <p>Deixe um comentário!</p>
            <form onSubmit={handleSubmit}>
                <label for='name'>Nome: </label>
                <input type='text' id='name' name='name' />
                <br />
                <label for='comment'>Comentário: </label>
                <input type='text' id='comment' name='comment' /> <br />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
};

export default CommentForm;
