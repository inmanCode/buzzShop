import { createStore } from 'redux';
import mainReducer from '../reducers/index';
export const initial = {
  Desings: [
    {
      id: '0',
      img_set: {
        url: '',
        width: 3,
        height: 2,
        rotationY: 20,
        rotationZ: 30,
      },
      text_set: {
        text: 'text',
        text_color: 'white',
        text_outline: 'black',
        text_shadow: 'white',
        text_size: 20,
        letter_spacing: 2,
        rotation: 160,
      },
    },
    {
      id: 'juj',
      img_set: {
        url: '',
        width: 3,
        height: 2,
        rotationY: 20,
        rotationZ: 30,
      },
      text_set: {
        text: 'text',
        text_color: 'white',
        text_outline: 'black',
        text_shadow: 'white',
        text_size: 20,
        letter_spacing: 2,
        rotation: 160,
      },
    },
  ],
};
export default function configStore() {
  return createStore(
    mainReducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
