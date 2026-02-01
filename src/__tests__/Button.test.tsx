import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

test('Button renders children', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeTruthy()
})
