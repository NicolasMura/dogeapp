import { MockBuilder, MockRender } from 'ng-mocks';
import { PageTitle } from './page-title';

describe('PageTitle', () => {
  beforeEach(() => MockBuilder(PageTitle));

  it('should create the PageTitle', () => {
    const fixture = MockRender(PageTitle);
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });
});
