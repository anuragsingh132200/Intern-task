import React from 'react'

const closebtn = () => {
    const handleClick = () => {
        const signupElements = document.getElementsByClassName('signup');
        for (let i = 0; i < signupElements.length; i++) {
          signupElements[i].style.display = "none";
        }
        const signinElements = document.getElementsByClassName('login');
        for (let i = 0; i < signinElements.length; i++) {
          signinElements[i].style.display = "none";
        }
      };
  return (
    <div className='bg-green-100 rounded-s-full absolute right-0'><img className='close w-6' onClick={handleClick} loading='lazy'
    src="https://imgs.search.brave.com/Xx3D48SPFcmZo5lGB7qJFuIhpv0G_oppfcI4ZBeptyc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9n/aWU1QjQ3OFQucG5n">
    </img></div>
  )
}

export default closebtn