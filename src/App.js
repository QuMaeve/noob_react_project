import React from 'react';
import swap from './components/swap';
import Head from './components/Head';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import LatestPosts from './pages/LatestPosts';
import Post from './pages/Post';
import User from './pages/User';
import {
    Container,
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';
import styles from './styles.module.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        <a href="/">home</a>
        this.state = {
            error: null,
            isLoaded: false,
            posts: [],
        }
        swap.getAllPosts()
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error: error,
                })
            })
            .then(response => {
                this.setState({
                    posts: response,
                    isLoaded: true,
                })
            }) 
    }
    //Маршр. router и ссылки
    render() {
        return (
            <Router>
                <Container>
                    <Head />
                    <hr />
                    <Route exact
                        path="/"
                        render={props => <Home {...props} posts={this.state.posts} />} 
                    />
                    <Link to="/about" > {About} </Link>
                    <Route path="/contacts" component={Contacts} />
                    <Route exact path="/posts" component={LatestPosts} />
                    <Route path="/posts/:postId" component={Post} />
                    <Route path="/user/:userId" component={User} />
                    <hr />
                    <div className={styles.test}>
                        <p> React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. </p>
                        <p> React может использоваться для разработки одностраничных и мобильных приложений.</p>
                    </div>                   
                </Container>
            </Router>
       );        
    }
}

export default App;