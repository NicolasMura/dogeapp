import { MockBuilder, MockRender } from 'ng-mocks';
import { Header } from './header';

describe('Header', () => {
  beforeEach(() => MockBuilder(Header));

  it('should create the header', () => {
    const fixture = MockRender(Header);
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });
});
