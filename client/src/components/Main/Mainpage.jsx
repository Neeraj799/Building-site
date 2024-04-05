import React from 'react'
import backgroundImage from '../../assets/images/pic.png'
import '../Main/Mainpage.css'

const Mainpage = () => {
    return (
        <div>
            <div className='homepage'>
                <div className='background-image'>
                    <img src={backgroundImage} alt="Background" />
                </div>

                <div className='main-heading'>
                    <span className='main-wrapper'>
                        <span>Expression Of</span>
                        <span>Excellent Living</span>
                    </span>


                </div>
            </div>
        </div>
    )
}

export default Mainpage
