import React, { useRef, useState } from 'react';

const Practice = () => {
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef(null);

  const changeStatus = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={changeStatus}
        style={{ backgroundColor: isClicked ? 'green' : 'black' }}
      >
        Click me
      </button>
    </div>
  );
};

export default Practice;
