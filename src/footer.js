import React from 'react'

export const Footer = () => {
    const year = new Date();
  return (
    <footer> Copyright  &copy; { year.getFullYear()} </footer>
  )
}
export default Footer;