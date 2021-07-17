import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { connect } from 'react-redux';
import { editImage } from '../actions/index';
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  saveImage: (Obj) => dispatch(editImage(Obj)),
});
const ImageSet = ({ img, setImage, saveImage }) => {
  let file;
  const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.className += ' drag_active';
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.className -= 'drag_active';
    e.currentTarget.className += ' drag_drop';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.className -= 'drag_active';
    e.currentTarget.className += ' drag_drop';
    file = e.dataTransfer.files[0];
    const fileType = file.type;
    if (validTypes.includes(fileType)) {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        let fileUrl = fileReader.result;
        setImage({ ...img, url: fileUrl });
      };
      fileReader.readAsDataURL(file);
    } else {
      alert('this is not an image');
    }
  };
  const handleInputFile = (e) => {
    e.preventDefault();
    file = e.currentTarget.files[0];
    const fileType = file.type;
    if (validTypes.includes(fileType)) {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        let fileUrl = fileReader.result;
        setImage({ ...img, url: fileUrl });
      };
      fileReader.readAsDataURL(file);
    }
  };
  const removeImage = () => {
    setImage({ ...img, url: '' });
  };
  return (
    <div className='image_con'>
      {img.url ? (
        <div className='image_settings'>
          <div className='img_set_con'>
            <img src={img.url} alt='' />

            <div className='buttons'>
              <button onClick={removeImage} id='remove_image'>
                Remove image
              </button>
              <button id='reset_settings'>Reset settings</button>
            </div>
            <div className='size'>
              <div className='width'>
                <h4>width :</h4>
                <div
                  className='plus'
                  onClick={() =>
                    setImage({
                      ...img,
                      img_width: ++img.img_width,
                    })
                  }
                >
                  <AddIcon />
                </div>
                <input
                  type='number'
                  name=''
                  value={img.img_width}
                  onChange={(e) =>
                    setImage({ ...img, img_width: e.currentTarget.value })
                  }
                />
                <div
                  className='minus'
                  onClick={() =>
                    setImage({ ...img, img_width: --img.img_width })
                  }
                >
                  <RemoveIcon />
                </div>
              </div>

              <div className='height'>
                <h4>height :</h4>
                <div
                  className='plus'
                  onClick={() =>
                    setImage({
                      ...img,
                      img_height: ++img.img_height,
                    })
                  }
                >
                  <AddIcon />
                </div>
                <input
                  type='number'
                  name=''
                  value={img.img_height}
                  onChange={(e) =>
                    setImage({
                      ...img,
                      img_height: e.currentTarget.value,
                    })
                  }
                />
                <div
                  className='minus'
                  onClick={() =>
                    setImage({
                      ...img,
                      img_height: --img.img_height,
                    })
                  }
                >
                  <RemoveIcon />
                </div>
              </div>
            </div>
            <div className='rotate'>
              <label htmlFor='range'>rotateY :</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type='range' name='' />
              </div>
              <label htmlFor='range'>rotateZ :</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type='range' name='' />
              </div>
            </div>
            <button onClick={() => saveImage(img)}>save image</button>
          </div>
        </div>
      ) : (
        <div
          className='drag_drop'
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <img src='./cloud-computing.png' alt='' />
          <h2>Drag & Drop to upload file</h2>
          <h2>Or</h2>
          <input type='file' name='' onChange={handleInputFile} />
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageSet);
