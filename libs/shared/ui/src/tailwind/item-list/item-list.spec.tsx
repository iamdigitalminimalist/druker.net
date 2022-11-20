import { render } from '@testing-library/react';

import ItemList from './item-list';

describe('ItemList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemList />);
    expect(baseElement).toBeTruthy();
  });
});
