import React from 'react'
import classNames from 'classnames'

import Button from 'react-bootstrap/Button'

import styles from './UIButton.module.css'

const UIButton = ({ children, ...rest }) => (
  <Button 
    className={classNames(
      'fontOpenSans',
      styles.button,
    )}
    {...rest}
    block
  >
    {children}
  </Button>
)

export default UIButton