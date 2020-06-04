import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import profile_picture from './assets/images/profilepicture.jpg';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Vince Hamill',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'My Name is Vince Hamill',
        subTitle: 'Young Software Engineer Based in New York City',
        text: 'Check out my projects below!'
      },
      about: {
        title: 'About Me',
        subTitle: 'Young Software Engineer Based in New York City',
        text: 'Check out my projects below!',
        imgSrc: profile_picture
      },
      contact: {
        title: 'Let\'s Talk',
        subTitle: 'Young Software Engineer Based in New York City',
        text: 'Check out my projects below!'
      }

    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Vince Hamill</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} imgSrc={this.state.about.imgSrc}/>} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
  
}

export default App;
