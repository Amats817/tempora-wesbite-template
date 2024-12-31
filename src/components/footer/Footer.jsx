import React from 'react';
import './footer.css';
import { FaGithub } from "react-icons/fa";
import { SiKofi } from "react-icons/si";
import { SiOsu } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/teamkongehund/Tempora" target="_blank" rel="noopener noreferrer" className="icon">
        <FaGithub />
      </a>
      <a href="https://osu.ppy.sh/users/1596999" target="_blank" rel="noopener noreferrer" className="icon">
        <SiOsu />
      </a>
      <a href="https://ko-fi.com/kongehund" target="_blank" rel="noopener noreferrer" className="icon">
        <SiKofi />
      </a>
    </div>
  );
}

export default Footer;