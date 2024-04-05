import React from 'react'
import './Testimonials.css'
import profileImage from '../../assets/images/pic2.png'
import StarRateIcon from '@mui/icons-material/StarRate';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const Testimonials = () => {
    return (
        <div className='testimonial-container'>
            <div className='main-heading'>
                <h2>Testimonials</h2>

            </div>
            <span className='outside-circle1'>
                <CircleOutlinedIcon style={{ fontSize: '102px', color: 'white' }} />
            </span>
            <span className='inside-circle1'>
                <CircleOutlinedIcon style={{ fontSize: '102px', color: 'white' }} />
            </span>

            <div className='testimonials-container'>
                <div className='container1'>
                    <div className='content-wrapper'>
                        <div style={{ color: 'red' }}>What they say</div>
                        <div>about us?</div>
                        <FormatQuoteIcon className='icon' style={{ fontSize: '200px' }} />
                        <div className='name'>SHYMAPRASAD T C</div>
                        <div className='subheading'>NATIONAL SIGNATURE</div>
                    </div>
                </div>

                <div className='container2'>
                    <div className='profile-wrapper'>
                        <img src={profileImage} alt="" />
                    </div>
                    <div className='profile-details'>
                        <div className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus commodi temporibus tempora quis pariatur vitae error, corporis optio </div>
                    </div>
                    <div className='star-logo'>
                        <StarRateIcon style={{ fontSize: '42px' }} />
                        <StarRateIcon style={{ fontSize: '42px' }} />
                        <StarRateIcon style={{ fontSize: '42px' }} />
                        <StarRateIcon style={{ fontSize: '42px' }} />
                        <StarRateIcon style={{ fontSize: '42px' }} />
                    </div>
                    <span className='logo'>
                        <FormatQuoteIcon style={{ fontSize: '100px', transform: 'rotate(90deg)' }} />

                    </span>

                </div>
            </div>
            <span className='dots'>
                <RadioButtonUncheckedIcon style={{ fontSize: '32px', background: 'red', borderRadius: '50%' }} />
                <RadioButtonUncheckedIcon style={{ fontSize: '32px', color: 'white' }} />
                <RadioButtonUncheckedIcon style={{ fontSize: '32px', color: 'white' }} />
                <RadioButtonUncheckedIcon style={{ fontSize: '32px', color: 'white' }} />
            </span>
        </div>
    )
}

export default Testimonials
