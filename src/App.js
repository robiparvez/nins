import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
import Event from './components/Events/Event';
import FacultyPage from './components/Faculty/FacultyPage';
import Notify from './components/Notification/Notify';
import About from './container/about/About';
import AboutPage from './container/about/AboutPage';
import Courses from './container/courses/Courses';
import Footer from './container/footer/Footer';
import FullGallery from './container/gallery/FullGallery';
import PhotoGallary from './container/gallery/PhotoGallery';
import Slider from './container/header/Slider';
import Message from './container/Messages/Message';
// import Topbar from './container/header/Topbar';
import VideoPage from './container/videoSection/VideoPage';

class App extends React.Component {
    /* constructor(props) {
        super(props);
    } */
    componentDidMount() {
        AOS.init({
            duration: 900
        });
    }
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className='App'>
                    {/* <Topbar /> */}
                    <Switch>
                        <Route exact path='/'>
                            <Slider />
                            <About />
                            <Message />
                            <VideoPage />
                            <Courses />
                            <PhotoGallary />
                        </Route>
                        <Route exact path='/about'>
                            <AboutPage />
                        </Route>
                        <Route exact path='/gallery'>
                            <FullGallery />
                        </Route>
                        <Route exact path='/courses'>
                            <Courses />
                        </Route>
                        <Route exact path='/events'>
                            <Event />
                        </Route>
                        <Route exact path='/notification'>
                            <Notify />
                        </Route>
                        <Route exact path='/faculty'>
                            <FacultyPage />
                        </Route>
                        <Route exact path='/contact'>
                            <Contact />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
