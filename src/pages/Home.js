import React from 'react';
import Posts from '../components/Posts';
const Home = (props) => {
    
        return (
            <> 
                <Posts posts={props.posts}/>
            </>
        )
    }

export default Home;