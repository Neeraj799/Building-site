import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Mainpage from '../components/Main/Mainpage'
import About from '../components/about/About'
import Awards from '../components/Awards/Awards'
import Places from '../components/places/Places'
import Testimonials from '../components/Testimonials/Testimonials'
import Blogs from '../components/Blogs/Blogs'
import Footer from '../components/Footer/Footer'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Mainpage />
            <About />
            <Awards />
            <Places />
            <Testimonials />
            <Blogs />
            <Footer />
        </div>

    )
}

export default Homepage
