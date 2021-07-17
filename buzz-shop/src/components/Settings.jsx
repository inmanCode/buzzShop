import React from 'react';
import '../styles/Design/settings.css';
import TextSet from './TextSet';
import ImageSet from './ImageSet';
import ProductSet from './ProductSet';

const Settings = ({ settingsType, img, setImage, text_set, setText_set }) => {
  return (
    <div className='settings'>
      <div className='settings_container'>
        {settingsType === 'add_text' ? (
          <TextSet text_set={text_set} setText_set={setText_set} />
        ) : settingsType === 'add_image' ? (
          <ImageSet img={img} setImage={setImage} />
        ) : (
          <ProductSet />
        )}
      </div>
    </div>
  );
};

export default Settings;
