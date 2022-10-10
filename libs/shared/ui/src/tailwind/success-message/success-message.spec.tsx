import { render } from '@testing-library/react';

import SuccessMessage from './success-message';

describe('SuccessMessage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SuccessMessage />);
    expect(baseElement).toBeTruthy();
  });
});
