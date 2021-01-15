import React from 'react';
import { 
    Row,
    Col,
 } from 'reactstrap';
 import { Route, Link } from 'react-router-dom';
 import swap from './swap';

class allPost extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        // console.log(this);

        let className = 'text-center mb-3 ';
        if (this.props.className) {
            className += this.props.className;
        }

        let result;
        if (/*this.state.isLoaded*/ true) {
            result = (
                <main className={className}>
                    <Link to={`/posts/${this.props.post.id}`}><h4>{this.props.post.title}</h4></Link>
                    <p>{this.props.post.body}</p>
                    <Row>
                        <Col md={{size: 2}}>
                            <Link to={`/user/${this.props.post.userId}`}>{this.props.user.name}</Link>
                        </Col>
                        <Col md={{size: 2, offset: 8}}>
                            <p>Comments: {this.props.commentsCount}</p>
                        </Col>
                    </Row>
                </main>
            )
        } else {
            result = <h1>Post loading...</h1>
        }

        return (
            <React.Fragment>
                {result}
            </React.Fragment>
        )
    }
}

allPost.defaultProps = {
    title: "allPost title",
    body: "allPost text"
}

export default allPost;