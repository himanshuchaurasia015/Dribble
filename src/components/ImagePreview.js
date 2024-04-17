import React from 'react';
import PropTypes from 'prop-types';

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen
    ? 'w-screen h-screen'
    : '';

  return (
    <div className={`relative text-center ${classNameFullscreen}`}>
      <img src={dataUri} className="w-[768px]" alt="" />
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool,
};

export default ImagePreview;