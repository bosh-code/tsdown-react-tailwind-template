import React from 'react'
import { Button } from '@/components/ui/button';

export interface MyButtonProps {
  type?: 'primary' | 'secondary'
}

const variantMapping = {
  primary: 'default',
  secondary: 'secondary'
} as const

export const MyButton: React.FC<MyButtonProps> = ({ type = 'primary' }) => {
  return <Button variant={variantMapping[type]}>my button: type {type}</Button>
}
