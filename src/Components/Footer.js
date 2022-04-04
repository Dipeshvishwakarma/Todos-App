import React from 'react'

const Footer = () => {
    let footerStyle = {
        position:"relative",
        top:"78vh",
        width:"100%"
    }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}> 
 
        <p className='text-center'>Copyright &copy; My  todolist.com</p>
    </footer>
  )
};

export default Footer;