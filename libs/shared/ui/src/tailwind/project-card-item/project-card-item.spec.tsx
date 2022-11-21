import { render } from '@testing-library/react';

import ProjectCardItem from './project-card-item';

describe('ProjectCardItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProjectCardItem />);
    expect(baseElement).toBeTruthy();
  });
});
