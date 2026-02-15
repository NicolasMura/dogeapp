import { Header } from '@doge/ui';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('Header', () => {
  beforeEach(() => MockBuilder(Header));

  it('should create the header', () => {
    const fixture = MockRender(Header);
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });
});
