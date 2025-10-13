import React from 'react'

export interface MyButtonProps {
  type?: 'primary'
}

export const MyButton: React.FC<MyButtonProps> = ({ type }) => {
  return <button className="text-red-500">my button: type {type}</button>
}
