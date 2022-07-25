import React from 'react'
import {MdEmail} from "react-icons/md"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <div className="footer__wrapper">
        <div>
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRsnwwHpcFBFlvfqLlwRdKdvrlJcXpBJspGqhsVVxRMrPlPJZjRnLGzwHnrQnCkFHPKLHtl" target="_blank" rel='noreferrer'><MdEmail className="footer__icons" /></a>
            <a href="https://www.linkedin.com/in/ariane-jay-tan-29339b193/" target="_blank" rel='noreferrer'><AiFillLinkedin className="footer__icons" /></a>
            <a href="https://github.com/Arianejay/Food-Recipe-React/tree/master" target="_blank" rel='noreferrer'><AiFillGithub className="footer__icons" /></a>
        </div>
        <div className="footer__rights">
            <p>&#169; Copyright {getYear} <span>Delicious</span></p>
        </div>
    </div>
  )
}

export default Footer