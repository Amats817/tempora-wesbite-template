import React from 'react'
import './header.css'
import temporaBg from '../../assets/tempora-bg.jpg';
import osu from '../../assets/osulogo.png';

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="header-content">
                    <h1>TEMPORA</h1>
                    <h2>Simple and Fast Digital Timer</h2>
                    <div className="osu-line">
                      <p>Made for osu!</p> <img src="" alt="" />
                      <img src={osu} alt="osu logo" className='osu-logo' />
                    </div>
                    <div className="download-buttons">
                      <a href="https://kongehund.s-ul.eu/AOJkVKol" target="_blank" rel="noopener noreferrer">
                          <button>DOWNLOAD</button>
                      </a>
                      <a href="https://drive.google.com/drive/folders/1MMpK10NkvDQJnMHWLKaQxvb8I3ssVhZO" target="_blank" rel="noopener noreferrer">
                          <button className="alternative-download">GOOGLE DRIVE</button>
                      </a>
                    </div>
                </div>
                <div className="header-image">
                  <img src={temporaBg} alt="tempora background" />
                  
                </div>
            </div>
        </>
      )
}

export default Header