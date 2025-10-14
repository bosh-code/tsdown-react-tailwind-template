import { MyButton } from '../../src'

export function App() {
  return (
    <div className={'card'}>
      <MyButton type="primary" size="medium" />
      <MyButton type="secondary" size="small" />
      <MyButton type="outline" />
      <MyButton type="error" size="large" />
      <MyButton type="ghost" />
    </div>
  )
}
