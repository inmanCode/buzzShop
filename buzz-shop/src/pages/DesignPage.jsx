import React, { useState } from 'react';
import '../styles/Design/designPage.css';
import SideNavBar from '../components/SideNavBar';
import Modifier from '../components/Modifier';
import Settings from '../components/Settings';
import Display from '../components/Display';
const mainTShirtUrl =
  'https://d3vvxc53hv5hl7.cloudfront.net/ASC_StapleTee_Front.png';

const DesignPage = ({ user }) => {
  const [settingsType, setSettingsType] = useState('');
  const [img, setImage] = useState({
    url: '',
    imgPos: { x: 300, y: 300 },
    imgEffects: 'default',
    edited: false,
  });
  const [text_set, setText_set] = useState({
    text: null,
    txtPos: { x: 300, y: 300 },
    textColor: 'black',
    edited: false,
  });
  return (
    <div className='design_page'>
      <SideNavBar />
      <div className='design_container'>
        <Modifier setSettingsType={setSettingsType} />
        <div className='set__display_container'>
          <Settings
            settingsType={settingsType}
            img={img}
            setImage={setImage}
            text_set={text_set}
            setText_set={setText_set}
          />
          <Display
            mainTShirtUrl={mainTShirtUrl}
            img={img}
            text_set={text_set}
          />
        </div>
      </div>
    </div>
  );
};

export default DesignPage;
