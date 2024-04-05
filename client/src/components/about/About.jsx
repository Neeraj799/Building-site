import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='main-container'>
            <div className='about-container'>
                <div className='about-left'>
                    <span>Best Builders</span>
                    <span>In</span>
                    <span style={{ color: 'red' }}>Navi Mumbai</span>
                    <span>and</span>
                    <span style={{ color: 'red' }}>Kerala</span>
                </div>
                <div className='about-right'>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil numquam labore quisquam velit molestias reprehenderit fuga culpa sapiente officiis est a minus laudantium, praesentium doloremque?</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure earum ex praesentium dignissimos repellendus harum eum doloremque nihil rerum! Fugit, eveniet ab. Earum, aperiam ullam.</div>
                    <button className='about-button'>
                        <div>
                            <span className='button-text'>Read more</span>
                            <span className="material-symbols-outlined">
                                arrow_circle_right
                            </span>
                        </div>

                    </button>
                </div>

            </div>
            <div className='about-bottom'>
                <div className='bottom-main-wrapper'>
                    <div className='bottom-wrapper'>
                        <span>5</span>
                        <span>Launched</span>
                    </div>
                    <div className='bottom-wrapper'>
                        <span>135</span>
                        <span>Sold out</span>
                    </div>
                    <div className='bottom-wrapper'>
                        <span>4</span>
                        <span>Ready to Move In</span>
                    </div>
                    <div className='bottom-wrapper'>
                        <span>4</span>
                        <span>Ongoing</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
