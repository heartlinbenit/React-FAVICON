import React from 'react';

function Component({ id, img, imageName, bgcolor, defaultColor, handleClick, selectedId}) {
 
    const buttonStyle = {
        backgroundColor: selectedId ==id ? bgcolor : defaultColor

    };

  return (
    <div>
      <button
        className='button-class text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
        onClick={() => handleClick(img, id)} 
        style={buttonStyle} 
      >
        {imageName}
      </button>
    </div>
  );
}

export default Component;