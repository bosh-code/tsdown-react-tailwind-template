import { MyButton } from '../../src'

export function App() {
  return (
    <div className='card'>
      <MyButton type="primary">Primary</MyButton>

      <MyButton type="secondary">Secondary</MyButton>

      <MyButton asChild={true}>
        <link href="#">Link as Button</link>
      </MyButton>
    </div>
  )
}
