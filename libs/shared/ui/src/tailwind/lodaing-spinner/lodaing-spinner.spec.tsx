import { render } from '@testing-library/react';

import LodaingSpinner from './lodaing-spinner';

describe('LodaingSpinner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LodaingSpinner />);
    expect(baseElement).toBeTruthy();
  });
});
