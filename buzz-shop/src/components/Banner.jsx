import React from 'react';
import '../styles/Hero/banner.css';
import 'css-doodle';
const Banner = () => {
  return (
    <div className='banner'>
      <css-doodle>
        {`
  :doodle {
    @grid: 300 / 100vmax;
    background: #0a0c27;
  }
  
  --hue: calc(180 + 1.5 * @row * @col);
  background: hsl(var(--hue), 50%, 70%);
  margin: -.5px;
  transition: @r(.5s) ease;
  clip-path: polygon(@pick(
    '0 0, 100% 0, 100% 100%',
    '0 0, 100% 0, 0 100%',
    '0 0, 100% 100%, 0 100%',
    '100% 0, 100% 100%, 0 100%'
  ));`}
      </css-doodle>
      <div className='title'>
        Sell or buy anything <br />
        from anywhere.
      </div>
      <div className='banner_container'>
        <div className='login_designer'>Sign in as a designer</div>
        <div className='Or'>
          <div className='hr'></div>
          <div>Or</div>
          <div className='hr'></div>
        </div>
        <div className='login_costumer'>Sign in as a costumer</div>
      </div>
    </div>
  );
};

export default Banner;
