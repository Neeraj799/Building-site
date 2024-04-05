import React from 'react'
import './Blogs.css'
import FeedIcon from '@mui/icons-material/Feed';
import building1 from '../../assets/images/pic3.jpg'
import building2 from '../../assets/images/pic4.jpg'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Blogs = () => {
    return (
        <div className='main-container'>
            <div className='blogs-container'>
                <span className='logo1'>
                    <FeedIcon style={{ fontSize: '102px', color: 'white' }} />
                </span>
                <span className='main-heading'>News and Blogs</span>
                <button className='about-button1'>
                    <div>
                        <span className='button-text1'>Read more</span>
                        <span className="material-symbols-outlined">
                            arrow_circle_right
                        </span>
                    </div>
                </button>
            </div>
            <div className='main-card-container'>
                <div className='card-container'>

                    <img src={building2} alt="" />

                    <div className='card-details'>
                        <span className='heading'>Renting vs Buying: What is your right choice for you in kochi? </span>
                        <span className='heading2'>March 16,2022</span>
                        <span className='heading3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, recusandae!</span>
                        <div className='heading4'>
                            <span>Read more</span>
                            <span className='arrowicon'>
                                <DoubleArrowIcon />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='card-container'>

                    <img src={building1} alt="" />

                    <div className='card-details'>
                        <span className='heading'>Renting vs Buying: What is your right choice for you in kochi? </span>
                        <span className='heading2'>March 16,2022</span>
                        <span className='heading3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, recusandae!</span>
                        <div className='heading4'>
                            <span>Read more</span>
                            <span className='arrowicon'>
                                <DoubleArrowIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-text'>
                <span>Prev</span>
                <span>------</span>
                <span>Next</span>
            </div>

        </div >
    )
}

export default Blogs
