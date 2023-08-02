import React from 'react';
import './footer.css';
import footerLinks from '../../assets/footerLinks';
import logo from '../../assets/0.png';

const Footer = () => {
  return (
    <>
      <div className="d-flex mt-5 p-2 justify-content-center footer_background">
        <div className="mx-5 flex-column">
          <div className="mx-4">
            <img src={logo} alt="logo" className='logo_img' />
            <p>E-Commerce</p>
          </div>
          <p>Página realizada para el portfolio</p>
          <section>
            <p>Redes Sociales</p>
          </section>
        </div>
        {footerLinks.map((link) => (
          <div key={footerLinks.indexOf(link)} className='my-auto'>
            <ul>
              <h5>{link.titleLink}</h5>
              {link.links.map((l) => (
                <li key={link.links.indexOf(l)}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
