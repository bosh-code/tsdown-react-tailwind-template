import { type FunctionComponent } from 'preact'

interface MyButtonProps {
  type?: 'primary'
}

export const MyButton: FunctionComponent<MyButtonProps> = ({ type }) => {
  return <button class="my-button">my button: type {type}</button>
}
