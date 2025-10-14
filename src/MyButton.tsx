import { type FunctionComponent } from 'preact'

export interface MyButtonProps {
  type?: 'primary'
}

export const MyButton: FunctionComponent<MyButtonProps> = ({ type }) => {
  return <button class="text-red-500">my button: type {type}</button>
}
