import React from 'react';
import '../styles/Hero/navBar.css';
const NavBar = () => {
  return (
    <div className='nav__bar'>
      <div className='first_options'>
        <div className='nav_logo option'>
          <a href='u'>
            <span id='Buzz'>BUZZ</span>
            <span id='&'>&</span>
            <span id='shop'>Shop</span>
          </a>
        </div>
        <div className='option'>
          <select name='' id=''>
            <option value='0'>Products</option>
          </select>
        </div>
        <div className='option'>
          <select name='' id=''>
            <option value='0'>How it works</option>
            <option value='1'>For designers</option>
            <option value='2'>For clients</option>
          </select>
        </div>
        <div className='option'>
          <a href='u'> Browse Items</a>
        </div>
      </div>
      <div className='second_options'>
        <div className='start_des option'>
          <a href='u'>Start designing</a>
        </div>
        <div className='log_in option'>
          <a href='u'>Log in</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
