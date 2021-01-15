import React from 'react';
import swap from '../components/swap';
import PostShort from '../components/PostShort';
import { Row, Col } from 'reactstrap';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userPosts: [],
            user: {},
            isLoaded: false,
        }
        // console.log(this);

        swap.getPostByUser(this.props.match.params.userId)
            .then(userPosts => {
                // let userPosts = posts.filter(post => (this.props.match.params.userId == post.userId))
                this.setState({
                    userPosts,
                    isLoaded: (this.state.userPosts && this.state.user) ? true : false,
                });
            })
        
        swap.getUser(this.props.match.params.userId)
            .then(user => this.setState({
                user,
                isLoaded: (this.state.userPosts && this.state.user) ? true : false,
            }))
    }
    render() {
        let result;
        const userPosts = this.state.userPosts.map(post => (
            <Col key={post.id}>
                <PostShort {...post} />
                <hr />
            </Col>
        ))
        if (this.state.isLoaded) {
            result = (
                <React.Fragment>
                    <h1 className="text-center mb-5">Posts by user {this.state.user.name}</h1>
                    {userPosts}
                </React.Fragment>
            )
        } else {
            result = <h1>Loading...</h1>
        }
        return(
            <React.Fragment>
                {result}
            </React.Fragment>
        )
    }
}

export default User;