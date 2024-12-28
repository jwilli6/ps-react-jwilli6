import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyProgressBar from './MyProgressBar';

describe('MyProgressBar Component', () => {
  it('renders the progress bar with the correct width based on props', () => {
    // Render the MyProgressBar with a progress value
    render(<MyProgressBar progress={50} />);

    // Get the progress bar element
    const progressBar = screen.getByTestId('progress-bar');

    // Assert that the width matches the passed prop
    expect(progressBar).toHaveStyle('width: 50%');

  });

//   it('updates the progress bar width when props change', () => {
//     // Render the MyProgressBar with an initial value
//     const { rerender } = render(<MyProgressBar progress={30} />);
//     const progressBar = screen.getByTestId('progress-bar');

//     // Initial assertion
//     expect(progressBar).toHaveStyle('width: 30%');

//     // Rerender with a new progress value
//     rerender(<MyProgressBar progress={70} />);

//     // Assert that the progress bar updates
//     expect(progressBar).toHaveStyle('width: 70%');
//   });
});
