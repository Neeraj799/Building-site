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

const Footer = () => {
    return (
        <div>
            <div className='main-containers'>
                <div className='footer-logo'>
                    <img src="https://nationalbuilders.in/wp-content/uploads/2021/10/Group-5.png" alt="" />
                </div>
                <hr />

                <div className='footer-content'>
                    <div className='footer-container'>
                        <div>NAVI MUMBAI</div>
                        <div> <span><LocationOnIcon /></span>National builders Office, Sea Queen Heritage,Building, 1st Floor, Plot No.6, Sector 18. Palm Beach Service Road, Sanpada, Navi Mumbai-400705</div>
                        <div> <span><EmailIcon /></span>marketingmumbai@nationalbuilders.in</div>
                        <div> <span><PhoneIcon /></span>9852485224, 9845771212</div>
                    </div>
                    <div className='footer-container-small'>
                        <span><FacebookIcon /></span>
                        <span><InstagramIcon /></span>
                        <span><LinkedInIcon /></span>
                        <span><YouTubeIcon /></span>
                    </div>
                    <div className='footer-container'></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
