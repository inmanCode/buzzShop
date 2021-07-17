import React, { useState } from 'react';
import '../styles/Design/display.css';
import { Stage, Layer, Image } from 'react-konva';
import ImageDisplay from './ImageDisplay';
import useImage from 'use-image';
import TextDisplay from './TextDisplay';
import Transformer from './Transformer';

const Display = ({ mainTShirtUrl, img, text_set }) => {
  const [baseUrl, setBaseUrl] = useState(undefined);
  const [selectedEl, setSelectedEl] = useState(undefined);
  const [image] = useImage(mainTShirtUrl);
  return (
    <div className='display'>
      <div className='display_con'>
        <Stage
          width={1000}
          height={1000}
          onMouseDown={(e) => e.target.getStage()}
        >
          <Layer>
            <Image draggable image={image} />
            {img.url ? (
              <ImageDisplay img={img} />
            ) : text_set.text ? (
              <TextDisplay text_set={text_set} />
            ) : null}
            <Transformer selected={selectedEl} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Display;
