import { render } from '@testing-library/react';

import SubscribeNewsletter from './subscribe-newsletter';

describe('SubscribeNewsletter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubscribeNewsletter />);
    expect(baseElement).toBeTruthy();
  });
});
