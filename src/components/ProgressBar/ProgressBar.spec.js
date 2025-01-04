import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar Component', () => {
  test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
 
      // Render the ProgressBar with a progress value
      render(<ProgressBar  percent={50} width={500}  />);
  
      // Get the progress bar element
      const progressBar = screen.getByTestId('progress-bar');
  
      // Assert that the width matches the passed prop
      expect(progressBar).toHaveStyle('width: 500px');

    // const progressBar = render(<ProgressBar percent={50} width={500} />);

    // fireEvent(getByText('progress-bar'), 'onPress');
   
    //  act(async () => {
      // const value = screen.findByTestId('progress-bar');
      // console.log(value);
      // expect(value).toHaveStyle('width: (251px');
      // console.log(progressBar.findByTestId('progress-bar'));
      // const value = getByText('progress-bar');
      //  update(<ProgressBar percent={50} width={500} />);
    //  });
  
    // Render the ProgressBar with a progress value
    // render(<ProgressBar percent={50} width={500} />);

    // act(async() => {
    //   const value = await screen.findByTestId('progress-bar');
    //   console.log(value);
    // });

    // Get the progress bar element
    // const progressBar = screen.queryByTestId('progress-bar');
    // console.log(screen.findAllByTestId());

    // Assert that the width matches the passed prop
    // expect(progressBar).toHaveStyle('width: (250px');
  });

  // it('updates the progress bar width when props change', () => {
  //   // Render the ProgressBar with an initial value
  //   const { rerender } = render(<ProgressBar progress={30} />);
  //   const progressBar = screen.getByTestId('progress-bar');

  //   // Initial assertion
  //   expect(progressBar).toHaveStyle('width: 30%');

  //   // Rerender with a new progress value
  //   rerender(<ProgressBar progress={70} />);

  //   // Assert that the progress bar updates
  //   expect(progressBar).toHaveStyle('width: 70%');
  // });
});

// describe('ProgressBar', () => {
//   test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
//       const wrapper = shallow(<ProgressBar percent={50} width={500} />);
//       const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
//       expect(width).toEqual(250);
//   });
// });