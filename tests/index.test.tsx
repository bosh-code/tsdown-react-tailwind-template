import { render, screen } from '@testing-library/react'
import { MyButton } from '../src'

test('button', () => {
  render(<MyButton type="primary" />)

  const buttonElement = screen.getByText(/my button: type primary/i)

  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toHaveTextContent('my button: type primary')
  expect(buttonElement.outerHTML).toMatchInlineSnapshot(
    `"<button class="text-red-500">my button: type primary</button>"`,
  )

  expect(buttonElement).toHaveClass('text-red-500')
})
