import React from 'react';
import '../styles/Design/modifier.css';
import TextFieldsOutlinedIcon from '@material-ui/icons/TextFieldsOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';

const Modifier = ({ setSettingsType }) => {
  return (
    <div className='modifier'>
      <div
        className='add_text'
        onClick={(e) => setSettingsType(e.currentTarget.className)}
      >
        <span className='text_icon'>
          <TextFieldsOutlinedIcon />
        </span>
        <span>Add text</span>
      </div>
      <div
        className='add_image'
        onClick={(e) => setSettingsType(e.currentTarget.className)}
      >
        <span className='img_icon'>
          <ImageOutlinedIcon />
        </span>
        <span>add image</span>
      </div>
      <div
        className='modif_product'
        onClick={(e) => setSettingsType(e.currentTarget.className)}
      >
        <span className='img_icon'>
          <ImageOutlinedIcon />
        </span>
        <span>Product</span>
      </div>
    </div>
  );
};

export default Modifier;
