import { render, screen } from '@testing-library/react';
import App from './App';

describe("App component",()=>{
  test('renders learn react link', () => {
    render(<App />);
    const testElement = screen.getByText("src/App.js");
    expect(testElement).toBeInTheDocument();
  });
  
})