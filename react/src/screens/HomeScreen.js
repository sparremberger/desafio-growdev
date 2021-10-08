import Education from "../components/Education";
import Reusable from "../components/Reusable";
import Experience from "../components/Experience";
import Comment from "../components/Comment";
import Contact from "../components/Contact";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { listComments } from "../actions/commentActions";
import CommentForm from "../components/CommentForm";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const commentList = useSelector((state) => state.commentList);
    const { loading, error, comments } = commentList;

    useEffect(() => {
        dispatch(listComments());
    }, [dispatch]);

    return (
        <>
            <h1>Álan Sparremberger</h1>
            <h4>
                <a href='http://www.alanspa.xyz'>www.alanspa.xyz</a>
            </h4>
            <h4>alanrspa@gmail.com • (51) 985121370 • Porto Alegre, RS</h4>
            <Education />
            <Reusable
                title={"Skills"}
                content={
                    "HTML, CSS, JavaScript, TypeScript, Node.js, C#, NET Core, Reactjs, Express, MongoDB, PostgreSQL, Microsoft SQL Server, Windows, Linux, Hardware, Suporte, VPS/Web Hosting"
                }
            ></Reusable>
            <Reusable
                title={"Idiomas"}
                content={"Português, Inglês"}
            ></Reusable>
            <Experience />
            <CommentForm />
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <hr></hr>
                    <h1>Comentários:</h1>
                    {comments.map((comment, index) => {
                        return <Comment key={index} comentario={comment} />;
                    })}
                </div>
            )}
            <Contact />
        </>
    );
};

export default HomeScreen;
