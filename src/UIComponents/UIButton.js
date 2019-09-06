import React from 'react'
import classNames from 'classnames'

import Button from 'react-bootstrap/Button'

import styles from './UIButton.module.css'

const UIButton = ({ children }) => (
  <Button 
    className={classNames(
      'fontOpenSans',
      styles.button,
    )}
    block
  >
    {children}
  </Button>
)

export default UIButton