
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./style.css"

const Links = () => {
  return(
    // <div className='projectbackgrnd'>
  <>
    <a href="https://www.linkedin.com/in/chrisma-caroline-stephen/" target="_blank" className='icon'><FontAwesomeIcon icon={faLinkedin} /></a>
    <a href="https://github.com/chrismacaroline"  target="_blank" className='icon'><FontAwesomeIcon icon={faGithub} /></a>
    <a href="mailto:chrismacaroline@gmail.com"  target="_blank" className='icon'><FontAwesomeIcon icon={faEnvelope} /></a>
    {/* <a href="/images/CV.pdf"  target="_blank" className='icon'><FontAwesomeIcon icon={faFile} /></a> */}
</>
  //  </div>
  )
}

export default Links;