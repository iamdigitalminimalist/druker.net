import { render } from '@testing-library/react';

import QuestionsAndAnswers from './questions-and-answers';

describe('QuestionsAndAnswers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuestionsAndAnswers />);
    expect(baseElement).toBeTruthy();
  });
});
