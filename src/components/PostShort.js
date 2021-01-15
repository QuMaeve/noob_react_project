import React from 'react';
import { 
    Col,
    Row,
 } from 'reactstrap';
 import { Route, Link } from 'react-router-dom';

const PostShort = (props) => {
    // console.log(props);
    let className = `text-center mb-3 `;
    if (props.className) {
        className += props.className;
    }

    return (
        <main className={className}>
            <Link to={`/posts/${props.id}`}><h4>{props.title}</h4></Link>
            <p>{props.body}</p>
        </main>
    )
}

PostShort.defaultProps = {
    title: "PostShort title",
    body: "PostShort text"
}

export default PostShort;