import React, {useEffect, useState} from 'react';
import PostShort from './PostShort';
import { Link } from 'react-router-dom';
/*ссылка для навигации */
import { Row } from 'reactstrap';


const Posts = (props) => {
        const posts = props.posts.slice(0, 6).map((post, index) => (
            <PostShort className="col-md-4" {...post} key={index}/>
        ))



        return (
            <React.Fragment>
                <Link to="/posts"><h2 className="text-center">Очень интересные посты</h2></Link>
                <Row>
                    {posts}
                </Row>
            </React.Fragment>
        )
     return (
        <div>



            </div>
    )   
    }  

export default Posts;