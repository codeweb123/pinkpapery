import React from 'react';
import './footer.styles.scss';
import Facebook from '../../assets/facebook.png';
import Pinterest from '../../assets/pinterest.png';
import Instagram from '../../assets/instagram.png';
import Github from '../../assets/github-logo.png';

const Footer = () => (
    <div className='footer'>

            <a href="https://www.facebook.com/thepinkpaperystore" target="_blank">
            <img className="footer-items" src={Facebook} alt='facebook' ></img>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.pinterest.com/thepinkpapery/">
            <img className="footer-items" src={Pinterest} alt='pinterest'  ></img>
            </a>
            &nbsp;&nbsp;
            <a href="https://www.instagram.com/thepinkpapery/">
            <img className="footer-items" src={Instagram} alt='instagram' ></img>
            </a>
            &nbsp;&nbsp;
        <div className='copyright'>
            <h6>Copyright &copy; JiyonCodes</h6>
            <a href= 'https://github.com/codeweb123/pinkpapery'>
                <img className="footer-items" src={Github} alt='github' ></img>
            </a>
        </div>
    </div>
)

export default Footer