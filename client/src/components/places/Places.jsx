import React from 'react'
import './Places.css'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const Places = () => {
    return (
        <div>
            <div className='places-containers'>
                <div className='presense-wrapper'>
                    <span className='outside-circle'>
                        <CircleOutlinedIcon style={{ fontSize: '102px', color: 'white' }} />
                    </span>
                    <span className='inside-circle'>
                        <CircleOutlinedIcon style={{ fontSize: '102px', color: 'white' }} />
                    </span>
                    <span className='icon-text'>Our Presence</span>
                </div>

                <div className='places-main-container'>
                    <span>
                        <img src="https://nationalbuilders.in/wp-content/uploads/2021/06/mumbai-e1624961286615.png" alt="" />
                    </span>
                    <div className='places-container'>
                        <div className='places-heading'>Mumbai</div>
                        <div className='places-subheading'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia blanditiis, autem quibusdam, eveniet quisquam, nesciunt recusandae facere nam dignissimos quod ratione quos consequuntur alias fugiat?</div>
                    </div>

                </div>
                <div className='button'>
                    <button className='about-button'>
                        <div>
                            <span className='button-text'>See Projects</span>
                            <span className="material-symbols-outlined">
                                arrow_circle_right
                            </span>
                        </div>

                    </button>
                </div>

                <div className='places-main-container2'>
                    <span>
                        <img src="https://nationalbuilders.in/wp-content/uploads/2021/06/kochi-e1624961355326.png" alt="" />
                    </span>
                    <div className='places-container2'>
                        <div className='places-heading'>Thane</div>
                        <div className='places-subheading'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia blanditiis, autem quibusdam, eveniet quisquam, nesciunt recusandae facere nam dignissimos quod ratione quos consequuntur alias fugiat?</div>
                    </div>

                </div>
                <div className='button2'>
                    <button className='about-button'>
                        <div>
                            <span className='button-text'>See Projects</span>
                            <span className="material-symbols-outlined">
                                arrow_circle_right
                            </span>
                        </div>

                    </button>
                </div>

                <div className='places-main-container'>
                    <span>
                        <img src="https://nationalbuilders.in/wp-content/uploads/2021/06/mumbai-e1624961286615.png" alt="" />
                    </span>
                    <div className='places-container'>
                        <div className='places-heading'>Kochi</div>
                        <div className='places-subheading'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia blanditiis, autem quibusdam, eveniet quisquam, nesciunt recusandae facere nam dignissimos quod ratione quos consequuntur alias fugiat?</div>
                    </div>

                </div>
                <div className='button'>
                    <button className='about-button'>
                        <div>
                            <span className='button-text'>See Projects</span>
                            <span className="material-symbols-outlined">
                                arrow_circle_right
                            </span>
                        </div>

                    </button>
                </div>

                <div className='places-main-container2'>
                    <span>
                        <img src="https://nationalbuilders.in/wp-content/uploads/2021/06/kochi-e1624961355326.png" alt="" />
                    </span>
                    <div className='places-container2'>
                        <div className='places-heading'>Thiruvalla</div>
                        <div className='places-subheading'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia blanditiis, autem quibusdam, eveniet quisquam, nesciunt recusandae facere nam dignissimos quod ratione quos consequuntur alias fugiat?</div>
                    </div>

                </div>
                <div className='button2'>
                    <button className='about-button'>
                        <div>
                            <span className='button-text'>See Projects</span>
                            <span className="material-symbols-outlined">
                                arrow_circle_right
                            </span>
                        </div>

                    </button>
                </div>

            </div>


        </div>
    )
}

export default Places
