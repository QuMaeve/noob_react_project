import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
    return (
        <React.Fragment>
    <a href="/">home</a>
    <div>
    <a href="/about">about</a>
    </div>
    <div>
    <a href="/contacts">contacts</a>
    </div>
    <div>
    <a href="/posts">posts</a>
    </div>
    <div>
       Разработка программных приложений Коренева Д. ПИ-17
    </div>
    </React.Fragment>
    )
}
export default Head;