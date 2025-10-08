import { render, screen } from '@testing-library/preact';
import { MyButton } from '../src';

test('button', () => {
  render(<MyButton type="primary" />)

  const buttonElement = screen.getByText(/my button: type primary/i)

  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toHaveTextContent('my button: type primary')
  expect(buttonElement.outerHTML).toMatchInlineSnapshot(
    `"<button class="my-button">my button: type primary</button>"`,
  )

  expect(buttonElement).toHaveClass('my-button')
})
