import { initial } from '../store/index';
export default function settings(state = initial, action) {
  switch (action.type) {
    case 'EDIT_TEXT_SET':
      const design = state.Desings.find(({ id }) => id === '0');
      const newText = {
        ...design,
        text_set: {
          text: action.payload.text,
          text_color: action.payload.text_color,
          text_outline: action.payload.text_outline,
          text_shadow: action.payload.text_shadow,
          text_size: action.payload.text_size,
          letter_spacing: action.payload.lette_spacing,
          rotation: action.payload.rotation,
        },
      };
      Object.assign(design, newText);
      return {
        ...state,
        Desings: [...state.Desings],
      };
    case 'EDIT_IMAGE_SET':
      const img_design = state.Desings.find(({ id }) => id === '0');
      const newImage = {
        ...img_design,
        img_set: {
          url: action.payload.url,
          width: action.payload.img_width,
          height: action.payload.img_height,
          rotationY: action.payload.rotationY,
          rotationZ: action.payload.rotationZ,
        },
      };
      Object.assign(img_design, newImage);
      return {
        ...state,
        Desings: [...state.Desings],
      };
    default:
      return state;
  }
}
