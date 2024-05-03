import React from 'react'

const PinkBtn = () => {
  const handleClick = () => {
    const signupElements = document.getElementsByClassName('signup');
    for (let i = 0; i < signupElements.length; i++) {
      signupElements[i].style.display = "flex"; // or "flex", "inline", etc.
    }
  };

  return (
    <div className='pink w-[60px] h-[60px] text-white fixed bottom-[15px] right-[15px] lg:hidden' onClick={handleClick}>
      .
    </div>
  )
}

export default PinkBtn;