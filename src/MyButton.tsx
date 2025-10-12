import React from 'react'

import './MyButton.css'

interface MyButtonProps {
  type?: 'primary'
}

export const MyButton: React.FC<MyButtonProps> = ({ type }) => {
  return <button className="my-button global-button">my button: type {type}</button>
}
