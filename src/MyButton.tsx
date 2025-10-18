import { type FunctionComponent, type ComponentChildren } from 'preact'
import { Button } from '@/components/ui/button'

export interface MyButtonProps {
  type?: 'primary' | 'secondary'

  /**
   * Demonstrates the `asChild` prop to render a different element
   */
  asChild?: boolean

  children?: ComponentChildren
}

const variantMapping = {
  primary: 'default',
  secondary: 'secondary'
} as const

export const MyButton: FunctionComponent<MyButtonProps> = ({ type = 'primary', asChild = false, children }) => {
  return <Button variant={variantMapping[type]} asChild={asChild}>{children}</Button>
}
