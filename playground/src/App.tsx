import { MyButton } from '../../src'
import { MyButton as BuiltButton } from '../../dist'

export function App() {
  return (
    <>
      <MyButton type="primary" />
      <BuiltButton />
    </>
  )
}
