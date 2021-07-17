import React from 'react';
import { connect } from 'react-redux';
import { editText } from '../actions/index';
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  saveText: (Obj) => dispatch(editText(Obj)),
});
const TextSet = ({ text_set, setText_set, saveText, state }) => {
  console.log(text_set.text);
  return (
    <div className='text_con'>
      <div className='text'>
        <h4>write you beautiful text here :</h4>
        <textarea
          name=''
          cols='30'
          rows='6'
          value={text_set.text}
          onChange={(e) =>
            setText_set({ ...text_set, text: e.currentTarget.value })
          }
        ></textarea>
      </div>
      <div className='text_colors'>
        <div className='text_color'>
          <h4>Change color :</h4>
          <input
            type='color'
            name='text_color'
            onChange={(e) =>
              setText_set({
                ...text_set,
                text_color: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className='text_outline'>
          <h4>Text outline :</h4>
          <input
            type='color'
            name='outline_color'
            onChange={(e) =>
              setText_set({
                ...text_set,
                text_outline: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className='text_shadow'>
          <h4>Text shadow :</h4>
          <input
            type='color'
            name='text_shadow'
            onChange={(e) =>
              setText_set({
                ...text_set,
                text_shadow: e.currentTarget.value,
              })
            }
          />
        </div>
      </div>
      <div className='text_sizes'>
        <div className='text_size'>
          <h4>Text size :</h4>
          <input
            type='range'
            name='text_size'
            min={20}
            max={120}
            onChange={(e) =>
              setText_set({
                ...text_set,
                text_size: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className='letter_spacing'>
          <h4>Letter spacing :</h4>
          <input
            type='range'
            name='letter_spacing'
            min={0}
            max={20}
            onChange={(e) =>
              setText_set({
                ...text_set,
                letter_spacing: e.currentTarget.value,
              })
            }
          />
        </div>
      </div>
      <div className='text_rotations'>
        <div className='rotate_text'>
          <h4>Rotate :</h4>
          <input
            type='range'
            name='rotation'
            min={0}
            max={360}
            onChange={(e) =>
              setText_set({
                ...text_set,
                rotation: e.currentTarget.value,
              })
            }
          />
        </div>
      </div>
      <button onClick={() => saveText(text_set)}>save</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TextSet);
