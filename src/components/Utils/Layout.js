import React from 'react'

const Layout = ({ children, className, ...rest }) => (
  <div className={className} {...rest}>
    { children }
  </div>
)
export default Layout
