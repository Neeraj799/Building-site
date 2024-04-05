import React from 'react'
import './Footer.css'
import footerImage from '../../assets/images/footerpic.svg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <div>
            <div className='footer-main-container'>
                <div className='footer-logo'>
                    <img src="https://nationalbuilders.in/wp-content/uploads/2021/10/Group-5.png" alt="" />
                </div>
                <hr />

                <div className='backgroundImage'>
                    <div className='footer-content'>
                        <div className='footer-container'>
                            <div>NAVI MUMBAI</div>
                            <div> <span><LocationOnIcon /></span>National builders Office, Sea Queen Heritage,Building, 1st Floor, Plot No.6, Sector 18. Palm Beach Service Road, Sanpada, Navi Mumbai-400705</div>
                            <div> <span><EmailIcon /></span>marketingmumbai@nationalbuilders.in</div>
                            <div> <span><PhoneIcon /></span>9852485224, 9845771212</div>
                        </div>
                        <div className='footer-container-small'>
                            <span><FacebookIcon style={{ fontSize: '32px', color: 'red' }} /></span>
                            <span><InstagramIcon style={{ fontSize: '32px', color: 'red' }} /></span>
                            <span><LinkedInIcon style={{ fontSize: '32px', color: 'red' }} /></span>
                            <span><YouTubeIcon style={{ fontSize: '32px', color: 'red' }} /></span>
                        </div>
                        <div className='footer-container'>
                            <div>KOCHI</div>
                            <div> <span><LocationOnIcon /></span>National builders, 5th Floor, High School Jn.Edappally, Kochi, Kerala-682 024</div>
                            <div> <span><EmailIcon /></span>marketingmumbai@nationalbuilders.in</div>
                            <div> <span><PhoneIcon /></span>9875452451, 9858424158</div>
                        </div>

                    </div>

                    <div className='footer-wrapper'>
                        <span>Home</span>
                        <span>Projects</span>
                        <span>Rentals</span>
                        <span>About</span>
                        <span>Contact</span>
                        <span>Testimonials</span>
                        <span>News and Events</span>
                        <span>Blogs</span>
                        <span>Key Handover</span>
                    </div>

                    <div className='footer-subwrapper'>
                        <div><span><CopyrightIcon /></span>National Builders All Rights Reserved</div>
                        <span>Accolads Integrated</span>
                        <span>Privacy Policy| Terms of Service</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
