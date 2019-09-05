import React from 'react'

import styles from './UIYoutubeEmbed.module.css'

const UIYoutubeEmbed = ({ videoId }) => (
    <div className={styles.videoWrapper}>
        <iframe 
            title={videoId}
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen>
            
        </iframe>
    </div>
)

export default UIYoutubeEmbed