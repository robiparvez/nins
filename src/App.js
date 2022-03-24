import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Topbar from './container/header/Topbar';
import Message from './container/Messages/Message';
import VideoPage from './container/videoSection/VideoPage';

export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 900
        });
    }, []);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className='App'>
                <Topbar />
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <>
                                <Slider />
                                <About />
                                <Message />
                                <VideoPage />
                                <Courses />
                                <PhotoGallary />
                            </>
                        }
                    />
                    <Route exact path='/about' element={<AboutPage />} />
                    <Route exact path='/gallery' element={<FullGallery />} />
                    <Route exact path='/courses' element={<Courses />} />
                    <Route exact path='/events' element={<Event />} />
                    <Route exact path='/notification' element={<Notify />} />
                    <Route exact path='/faculty' element={<FacultyPage />} />
                    {/* <Route exact path='/admission' element={<Admission/>} /> */}
                    <Route exact path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
