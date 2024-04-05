import React from 'react'
import './Video.css'
import video from '../../assets/images/video.mp4'
import poster from '../../assets/images/pic.png'


const Video = () => {
    return (
        <div>
            <div className='video-container'>
                <video controls width="1400" height="560" poster={poster} autoplay loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default Video
