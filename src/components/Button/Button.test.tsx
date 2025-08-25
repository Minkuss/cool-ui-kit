import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { lightTheme } from '@/theme/themes';
import React from "react";

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      {component}
    </ThemeProvider>
  );
};

describe('Button', () => {
  it('renders button with text', () => {
    renderWithTheme(<Button>Test Button</Button>);
    expect(screen.getByRole('button', { name: /test button/i })).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders different variants', () => {
    const { rerender } = renderWithTheme(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button')).toHaveClass('ui-button');

    rerender(
      <ThemeProvider theme={lightTheme}>
        <Button variant="secondary">Secondary</Button>
      </ThemeProvider>
    );
    expect(screen.getByRole('button')).toHaveClass('ui-button');

    rerender(
      <ThemeProvider theme={lightTheme}>
        <Button variant="outline">Outline</Button>
      </ThemeProvider>
    );
    expect(screen.getByRole('button')).toHaveClass('ui-button');
  });

  it('renders different sizes', () => {
    const { rerender } = renderWithTheme(<Button size="sm">Small</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    rerender(
      <ThemeProvider theme={lightTheme}>
        <Button size="lg">Large</Button>
      </ThemeProvider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders with icons', () => {
    const TestIcon = () => <span data-testid="test-icon">Icon</span>;

    renderWithTheme(
      <Button leftIcon={<TestIcon />}>With Icon</Button>
    );

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /with icon/i })).toBeInTheDocument();
  });

  it('shows loading state', () => {
    renderWithTheme(<Button loading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('is disabled when disabled prop is true', () => {
    renderWithTheme(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    renderWithTheme(
      <Button disabled onClick={handleClick}>
        Disabled Button
      </Button>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders full width button', () => {
    renderWithTheme(<Button fullWidth>Full Width</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ width: '100%' });
  });

  it('applies custom className', () => {
    renderWithTheme(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('ui-button', 'custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    renderWithTheme(<Button ref={ref}>Ref Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
