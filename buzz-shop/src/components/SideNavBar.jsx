import React, { useState } from 'react';
import '../styles/Design/sideNavBar.css';
import Avatar from '@material-ui/core/Avatar';
import EllipsisText from 'react-ellipsis-text';

//icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import KeyboardArrowLeftOutlinedIcon from '@material-ui/icons/KeyboardArrowLeftOutlined';
const SideNavBar = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div
      className='side_nav'
      onMouseEnter={() => setSideNav(true)}
      onMouseLeave={() => setSideNav(!sideNav)}
      style={{
        width: sideNav ? `300px` : `78px`,
      }}
    >
      <ul>
        <div
          className='user_menu'
          style={{
            background: sideNav ? `black` : `transparent`,
            color: sideNav ? `white` : `black`,
            padding: sideNav ? `5px 10px` : `0`,
          }}
        >
          <Avatar src='/broken-image.jpg' alt='' />
          <div id='user_info_menu'>
            <div className='user_name'>aymane abssi</div>
            <div className='user_email'>
              <EllipsisText text={'apollyon568@gmail.com'} length={20} />
            </div>
          </div>
          {sideNav ? (
            <span className='collaspe' onClick={() => setSideNav(false)}>
              <KeyboardArrowLeftOutlinedIcon />
            </span>
          ) : (
            <></>
          )}
        </div>
        <li className='nav_item'>
          <a href='/'>
            <span className='icon_menu_item'>
              <HomeOutlinedIcon />
            </span>
            <span>Home</span>
          </a>
        </li>
        <li className='nav_item'>
          <a href='/'>
            <span className='icon_menu_item'>
              <CreateOutlinedIcon />
            </span>
            <span>Create</span>
          </a>
        </li>
        <li className='nav_item'>
          <a href='/'>
            <span className='icon_menu_item'>
              <LocalGroceryStoreOutlinedIcon />
            </span>
            <span>Stores</span>
          </a>
        </li>
        <li className='nav_item'>
          <a href='/'>
            <span className='icon_menu_item'>
              <AccountBalanceWalletOutlinedIcon />
            </span>
            <span>Payouts</span>
          </a>
        </li>
        <li className='nav_item'>
          <a href='/'>
            <span className='icon_menu_item'>
              <ShoppingBasketOutlinedIcon />
            </span>
            <span>My purchases</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNavBar;
