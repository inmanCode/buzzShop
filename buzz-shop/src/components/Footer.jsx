import React from 'react';
import '../styles/Hero/footer.css';
const Footer = () => {
  return (
    <>
      <hr />
      <div className='footer'>
        <ol>
          <li id='logo'>BUZZ&Shop</li>
        </ol>
        <ol>
          <li className='list_head'>Sell</li>
          <li>Quickstart guide</li>
          <li>Sell anything</li>
          <li>Sell everywhere</li>
        </ol>
        <ol>
          <li className='list_head'>Buy</li>
          <li>Shop products</li>
          <li>Buy your own design</li>
          <li>Return policy</li>
        </ol>
        <ol>
          <li className='list_head'>About</li>
          <li>About us</li>
          <li>Blog</li>
          <li>Newsletter</li>
        </ol>
      </div>
    </>
  );
};

export default Footer;
