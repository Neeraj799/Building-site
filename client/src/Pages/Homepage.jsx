import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Mainpage from '../components/Main/Mainpage'
import About from '../components/about/About'
import Awards from '../components/Awards/Awards'
import Places from '../components/places/Places'
import Testimonials from '../components/Testimonials/Testimonials'
import Blogs from '../components/Blogs/Blogs'
import Footer from '../components/Footer/Footer'
import Video from '../components/Video/Video'


const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Mainpage />
            <About />
            <Awards />
            <Places />
            <Video />
            <Testimonials />
            <Blogs />
            <Footer />
        </div>

    )
}

export default Homepage
